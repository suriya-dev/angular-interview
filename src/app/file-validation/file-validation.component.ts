import { Component } from '@angular/core';
import * as Papa from 'papaparse';
@Component({
  selector: 'app-file-validation',
  templateUrl: './file-validation.component.html',
  styleUrl: './file-validation.component.scss'
})
export class FileValidationComponent {
  fileUploaded = false;
  errors: { rule: string; row: number; message: string }[] = [];
  groupedErrors: { name: string; errors: { row: number; message: string }[] }[] = [];

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          this.validateData(result.data);
        }
      });
    }
  }

  validateData(data: any[]): void {
    this.errors = [];
    const roleMapping = data.reduce((map, row) => {
      map[row.Email] = row.Role;
      return map;
    }, {} as Record<string, string>);

    data.forEach((row, index) => {
      const rowNum = index + 1; // Account for header row
      const email = row.Email;
      const role = row.Role;
      const reportsTo = row.ReportsTo;
      const reportsToRoles = reportsTo
        ? reportsTo.split(';').map((parent) => roleMapping[parent.trim()])
        : [];

      // Rule 1: Only Admin will report to Root
      if (role !== 'Admin' && reportsToRoles.includes('Root')) {
        this.errors.push({
          rule: 'Only Admin will report to Root',
          row: rowNum,
          message: `${email}: ${role} must not report to Root.`
        });
      }
      if (role === 'Admin' && !reportsToRoles.includes('Root')) {
        this.errors.push({
          rule: 'Only Admin will report to Root',
          row: rowNum,
          message: `${email}: Admin must report to Root but reports to ${reportsToRoles.join(', ')}.`
        });
      }

      // Rule 2: Managers can only report to other managers or admin
      if (role === 'Manager' && !reportsToRoles.every((r) => ['Admin', 'Manager'].includes(r))) {
        this.errors.push({
          rule: 'Managers can only report to other managers or admin',
          row: rowNum,
          message: `${email}: Manager must report to Admin or another Manager but reports to ${reportsToRoles.join(', ')}.`
        });
      }

      // Rule 3: Caller can only report to manager
      if (role === 'Caller' && !reportsToRoles.every((r) => r === 'Manager')) {
        this.errors.push({
          rule: 'Caller can only report to manager',
          row: rowNum,
          message: `${email}: Caller must report to a Manager but reports to ${reportsToRoles.join(', ')}.`
        });
      }

      // Rule 4: All users will report to 1 parent user at a time
      if (reportsTo && reportsTo.includes(';')) {
        this.errors.push({
          rule: 'All users will report to 1 parent user at a time',
          row: rowNum,
          message: `${email}: User reports to multiple parents (${reportsTo}).`
        });
      }
    });

    this.groupErrors();
    this.fileUploaded = true;
  }


  groupErrors(): void {
    const grouped = new Map<string, { row: number; message: string }[]>();

    this.errors.forEach((error) => {
      if (!grouped.has(error.rule)) {
        grouped.set(error.rule, []);
      }
      grouped.get(error.rule)?.push({ row: error.row, message: error.message });
    });

    this.groupedErrors = Array.from(grouped.entries()).map(([name, errors]) => ({
      name,
      errors
    }));
  }
}