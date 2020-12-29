using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorHouse.Migrations
{
    public partial class PopulateUserTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Address", "Discriminator", "IsAdmin", "Password", "Username" },
                values: new object[,]
                {
                    { 2, "Ul. Pipiego 2", "Customer", false, "Pipi666", "Pipi" },
                    { 4, "Os. Pipiów wielkich 666", "Customer", false, "77777", "Piri" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Area", "Discriminator", "IsAdmin", "Password", "SpecialistType", "Username" },
                values: new object[,]
                {
                    { 1, 5, "Specialist", true, "elelel", "Electrician", "ElectricWizard" },
                    { 3, 3, "Specialist", false, "12345", "Gardener", "FlowerPower" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
