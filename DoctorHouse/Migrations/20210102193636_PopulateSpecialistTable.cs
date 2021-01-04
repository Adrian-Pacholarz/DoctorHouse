using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorHouse.Migrations
{
    public partial class PopulateSpecialistTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Area", "Discriminator", "IsAdmin", "Password", "SpecialistType", "Username" },
                values: new object[,]
                {
                    { 3, 5, "Specialist", true, "elelele", "Electrician", "ElectricWizard" },
                    { 4, 3, "Specialist", false, "66666666", "Gardener", "FlowerPower" },
                    { 5, 1, "Specialist", false, "0%6hasfa", "Plumber", "ZlotaRączka" }
                });

            migrationBuilder.InsertData(
                table: "UserDetails",
                columns: new[] { "Id", "DateOfRegistration", "EMail", "FirstName", "LastName", "PhoneNumber", "UserId" },
                values: new object[] { 3, new DateTime(2021, 1, 2, 20, 36, 35, 102, DateTimeKind.Local).AddTicks(591), "jank@gmail0.com", "Jan", "Kowalski", 444234089L, 3 });

            migrationBuilder.InsertData(
                table: "UserDetails",
                columns: new[] { "Id", "DateOfRegistration", "EMail", "FirstName", "LastName", "PhoneNumber", "UserId" },
                values: new object[] { 4, new DateTime(2021, 1, 2, 20, 36, 35, 102, DateTimeKind.Local).AddTicks(613), "alojzyKA@gmail.pl", "Alojzy", "Kwiatek", 654354676L, 4 });

            migrationBuilder.InsertData(
                table: "UserDetails",
                columns: new[] { "Id", "DateOfRegistration", "EMail", "FirstName", "LastName", "PhoneNumber", "UserId" },
                values: new object[] { 5, new DateTime(2021, 1, 2, 20, 36, 35, 102, DateTimeKind.Local).AddTicks(617), "halinka@onet.com", "Halina", "Kluczkowska", 967545234L, 5 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 2, 20, 26, 23, 70, DateTimeKind.Local).AddTicks(8967));

            migrationBuilder.UpdateData(
                table: "UserDetails",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateOfRegistration",
                value: new DateTime(2021, 1, 2, 20, 26, 23, 77, DateTimeKind.Local).AddTicks(1517));
        }
    }
}
