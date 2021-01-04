using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorHouse.Migrations
{
    public partial class PopulateTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Companies",
                columns: new[] { "Id", "Address", "CompanyName", "Description", "IsVerified", "NIP", "PhoneNumber", "Rating" },
                values: new object[,]
                {
                    { 1, "Ul. Wielkiego Wybuchu 5", "BigPips", "Robimy wszystko od ręki", true, 1234567890L, 123432234L, (byte)0 },
                    { 2, "Ul. Napoleona Pipa 7/10", "The Pipis", "Piriririririr", true, 9807654321L, 333222111L, (byte)0 }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Address", "Discriminator", "IsAdmin", "Password", "Username" },
                values: new object[,]
                {
                    { 1, "ul. Pipiego 2", "Customer", false, "Pipi666", "Pipi" },
                    { 2, "os. Pipowo 5/4", "Customer", false, "123456", "Piri" }
                });

            migrationBuilder.InsertData(
                table: "UserDetails",
                columns: new[] { "Id", "DateOfRegistration", "EMail", "FirstName", "LastName", "PhoneNumber", "UserId" },
                values: new object[] { 1, new DateTime(2021, 1, 2, 20, 26, 23, 70, DateTimeKind.Local).AddTicks(8967), "pipi@pip.pi", "Pipek", "Pipowski", 123456789L, 1 });

            migrationBuilder.InsertData(
                table: "UserDetails",
                columns: new[] { "Id", "DateOfRegistration", "EMail", "FirstName", "LastName", "PhoneNumber", "UserId" },
                values: new object[] { 2, new DateTime(2021, 1, 2, 20, 26, 23, 77, DateTimeKind.Local).AddTicks(1517), "piri666@pip.pir", "Pirek", "Pir", 666777111L, 2 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
