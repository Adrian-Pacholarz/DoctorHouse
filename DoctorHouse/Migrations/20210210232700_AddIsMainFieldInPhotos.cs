using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorHouse.Migrations
{
    public partial class AddIsMainFieldInPhotos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Users_UserId",
                table: "Photos");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Photos",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsMain",
                table: "Photos",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateOfRegistration",
                value: new DateTime(2021, 2, 11, 0, 26, 59, 605, DateTimeKind.Local).AddTicks(8213));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateOfRegistration",
                value: new DateTime(2021, 2, 11, 0, 26, 59, 610, DateTimeKind.Local).AddTicks(8680));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 3,
                column: "DateOfRegistration",
                value: new DateTime(2021, 2, 11, 0, 26, 59, 612, DateTimeKind.Local).AddTicks(5885));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 4,
                column: "DateOfRegistration",
                value: new DateTime(2021, 2, 11, 0, 26, 59, 612, DateTimeKind.Local).AddTicks(5960));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 5,
                column: "DateOfRegistration",
                value: new DateTime(2021, 2, 11, 0, 26, 59, 612, DateTimeKind.Local).AddTicks(5966));

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Users_UserId",
                table: "Photos",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Users_UserId",
                table: "Photos");

            migrationBuilder.DropColumn(
                name: "IsMain",
                table: "Photos");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Photos",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateOfRegistration",
                value: new DateTime(2021, 2, 6, 19, 19, 44, 37, DateTimeKind.Local).AddTicks(4049));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateOfRegistration",
                value: new DateTime(2021, 2, 6, 19, 19, 44, 41, DateTimeKind.Local).AddTicks(1086));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 3,
                column: "DateOfRegistration",
                value: new DateTime(2021, 2, 6, 19, 19, 44, 42, DateTimeKind.Local).AddTicks(3560));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 4,
                column: "DateOfRegistration",
                value: new DateTime(2021, 2, 6, 19, 19, 44, 42, DateTimeKind.Local).AddTicks(3618));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 5,
                column: "DateOfRegistration",
                value: new DateTime(2021, 2, 6, 19, 19, 44, 42, DateTimeKind.Local).AddTicks(3622));

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Users_UserId",
                table: "Photos",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
