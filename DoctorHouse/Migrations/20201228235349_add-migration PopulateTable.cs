using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorHouse.Migrations
{
    public partial class addmigrationPopulateTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"DELETE FROM Users WHERE Id = 1;");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
