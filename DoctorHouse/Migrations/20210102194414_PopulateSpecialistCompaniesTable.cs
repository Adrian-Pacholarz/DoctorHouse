using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorHouse.Migrations
{
    public partial class PopulateSpecialistCompaniesTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "SpecialistCompanies",
                columns: new[] { "CompanyId", "SpecialistId" },
                values: new object[,]
                {
                    { 1, 1 },
                    { 2, 2 },
                    { 1, 3 },
                    { 2, 3 }
                });

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 2, 20, 44, 12, 920, DateTimeKind.Local).AddTicks(3825));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 2, 20, 44, 12, 928, DateTimeKind.Local).AddTicks(6881));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 3,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 2, 20, 44, 12, 930, DateTimeKind.Local).AddTicks(9041));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 4,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 2, 20, 44, 12, 930, DateTimeKind.Local).AddTicks(9133));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 5,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 2, 20, 44, 12, 930, DateTimeKind.Local).AddTicks(9141));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "SpecialistCompanies",
                keyColumns: new[] { "CompanyId", "SpecialistId" },
                keyValues: new object[] { 1, 1 });

            migrationBuilder.DeleteData(
                table: "SpecialistCompanies",
                keyColumns: new[] { "CompanyId", "SpecialistId" },
                keyValues: new object[] { 2, 2 });

            migrationBuilder.DeleteData(
                table: "SpecialistCompanies",
                keyColumns: new[] { "CompanyId", "SpecialistId" },
                keyValues: new object[] { 1, 3 });

            migrationBuilder.DeleteData(
                table: "SpecialistCompanies",
                keyColumns: new[] { "CompanyId", "SpecialistId" },
                keyValues: new object[] { 2, 3 });

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 2, 20, 36, 35, 97, DateTimeKind.Local).AddTicks(4745));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 2, 20, 36, 35, 101, DateTimeKind.Local).AddTicks(396));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 3,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 2, 20, 36, 35, 102, DateTimeKind.Local).AddTicks(591));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 4,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 2, 20, 36, 35, 102, DateTimeKind.Local).AddTicks(613));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 5,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 2, 20, 36, 35, 102, DateTimeKind.Local).AddTicks(617));
        }
    }
}
