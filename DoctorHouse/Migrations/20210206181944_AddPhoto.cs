using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorHouse.Migrations
{
    public partial class AddPhoto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Photos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FileName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Photos_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_Photos_UserId",
                table: "Photos",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Photos");

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
    }
}
