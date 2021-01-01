using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorHouse.Migrations
{
    public partial class AddCompaniesToDbContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointment_Company_CompanyId",
                table: "Appointment");

            migrationBuilder.DropForeignKey(
                name: "FK_Appointment_Users_CustomerId",
                table: "Appointment");

            migrationBuilder.DropForeignKey(
                name: "FK_Appointment_Users_SpecialistId",
                table: "Appointment");

            migrationBuilder.DropForeignKey(
                name: "FK_SpecialistCompanies_Company_CompanyId",
                table: "SpecialistCompanies");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Company",
                table: "Company");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Appointment",
                table: "Appointment");

            migrationBuilder.RenameTable(
                name: "Company",
                newName: "Companies");

            migrationBuilder.RenameTable(
                name: "Appointment",
                newName: "Appointments");

            migrationBuilder.RenameIndex(
                name: "IX_Appointment_SpecialistId",
                table: "Appointments",
                newName: "IX_Appointments_SpecialistId");

            migrationBuilder.RenameIndex(
                name: "IX_Appointment_CustomerId",
                table: "Appointments",
                newName: "IX_Appointments_CustomerId");

            migrationBuilder.RenameIndex(
                name: "IX_Appointment_CompanyId",
                table: "Appointments",
                newName: "IX_Appointments_CompanyId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Companies",
                table: "Companies",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Appointments",
                table: "Appointments",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_Companies_CompanyId",
                table: "Appointments",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_Users_CustomerId",
                table: "Appointments",
                column: "CustomerId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_Users_SpecialistId",
                table: "Appointments",
                column: "SpecialistId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_SpecialistCompanies_Companies_CompanyId",
                table: "SpecialistCompanies",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_Companies_CompanyId",
                table: "Appointments");

            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_Users_CustomerId",
                table: "Appointments");

            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_Users_SpecialistId",
                table: "Appointments");

            migrationBuilder.DropForeignKey(
                name: "FK_SpecialistCompanies_Companies_CompanyId",
                table: "SpecialistCompanies");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Companies",
                table: "Companies");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Appointments",
                table: "Appointments");

            migrationBuilder.RenameTable(
                name: "Companies",
                newName: "Company");

            migrationBuilder.RenameTable(
                name: "Appointments",
                newName: "Appointment");

            migrationBuilder.RenameIndex(
                name: "IX_Appointments_SpecialistId",
                table: "Appointment",
                newName: "IX_Appointment_SpecialistId");

            migrationBuilder.RenameIndex(
                name: "IX_Appointments_CustomerId",
                table: "Appointment",
                newName: "IX_Appointment_CustomerId");

            migrationBuilder.RenameIndex(
                name: "IX_Appointments_CompanyId",
                table: "Appointment",
                newName: "IX_Appointment_CompanyId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Company",
                table: "Company",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Appointment",
                table: "Appointment",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Appointment_Company_CompanyId",
                table: "Appointment",
                column: "CompanyId",
                principalTable: "Company",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Appointment_Users_CustomerId",
                table: "Appointment",
                column: "CustomerId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Appointment_Users_SpecialistId",
                table: "Appointment",
                column: "SpecialistId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_SpecialistCompanies_Company_CompanyId",
                table: "SpecialistCompanies",
                column: "CompanyId",
                principalTable: "Company",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
