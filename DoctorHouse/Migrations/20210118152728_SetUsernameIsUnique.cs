using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorHouse.Migrations
{
    public partial class SetUsernameIsUnique : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.CreateIndex(
                name: "IX_Users_Username",
                table: "Users",
                column: "Username",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Users_Username",
                table: "Users");

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 4, 3, 45, 52, 42, DateTimeKind.Local).AddTicks(2770));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 4, 3, 45, 52, 45, DateTimeKind.Local).AddTicks(8713));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 3,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 4, 3, 45, 52, 46, DateTimeKind.Local).AddTicks(9149));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 4,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 4, 3, 45, 52, 46, DateTimeKind.Local).AddTicks(9183));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 5,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 4, 3, 45, 52, 46, DateTimeKind.Local).AddTicks(9187));
        }
    }
}
