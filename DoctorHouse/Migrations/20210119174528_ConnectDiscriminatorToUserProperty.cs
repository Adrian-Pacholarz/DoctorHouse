using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorHouse.Migrations
{
    public partial class ConnectDiscriminatorToUserProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "SpecialistCompanies",
                keyColumns: new[] { "CompanyId", "SpecialistId" },
                keyValues: new object[] { 1, 1 });

            migrationBuilder.DeleteData(
                table: "SpecialistCompanies",
                keyColumns: new[] { "CompanyId", "SpecialistId" },
                keyValues: new object[] { 2, 2 });

            migrationBuilder.InsertData(
                table: "SpecialistCompanies",
                columns: new[] { "CompanyId", "SpecialistId" },
                values: new object[,]
                {
                    { 1, 4 },
                    { 2, 5 }
                });

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 19, 18, 45, 27, 251, DateTimeKind.Local).AddTicks(6694));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 19, 18, 45, 27, 258, DateTimeKind.Local).AddTicks(8069));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 3,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 19, 18, 45, 27, 260, DateTimeKind.Local).AddTicks(4854));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 4,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 19, 18, 45, 27, 260, DateTimeKind.Local).AddTicks(4924));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 5,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 19, 18, 45, 27, 260, DateTimeKind.Local).AddTicks(4930));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "SpecialistCompanies",
                keyColumns: new[] { "CompanyId", "SpecialistId" },
                keyValues: new object[] { 1, 4 });

            migrationBuilder.DeleteData(
                table: "SpecialistCompanies",
                keyColumns: new[] { "CompanyId", "SpecialistId" },
                keyValues: new object[] { 2, 5 });

            migrationBuilder.InsertData(
                table: "SpecialistCompanies",
                columns: new[] { "CompanyId", "SpecialistId" },
                values: new object[,]
                {
                    { 1, 1 },
                    { 2, 2 }
                });

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 18, 16, 27, 27, 51, DateTimeKind.Local).AddTicks(3010));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 18, 16, 27, 27, 58, DateTimeKind.Local).AddTicks(422));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 3,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 18, 16, 27, 27, 60, DateTimeKind.Local).AddTicks(1091));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 4,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 18, 16, 27, 27, 60, DateTimeKind.Local).AddTicks(1216));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 5,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 18, 16, 27, 27, 60, DateTimeKind.Local).AddTicks(1222));
        }
    }
}
