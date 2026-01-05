import prisma from "./src/prisma";
import bcrypt from "bcryptjs";

async function createTestUser() {
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash("password123", 10);

    // Cek apakah user sudah ada
    const existingUser = await prisma.user.findUnique({
      where: { email: "admin@mail.com" },
    });

    if (existingUser) {
      console.log("✅ User admin@mail.com sudah ada di database");
      console.log(`   ID: ${existingUser.id_user}`);
      console.log(`   Role: ${existingUser.role}`);
      return;
    }

    // Buat user baru
    const newUser = await prisma.user.create({
      data: {
        email: "admin@mail.com",
        password: hashedPassword,
        role: "muhafiz",
      },
    });

    console.log("✅ Berhasil membuat test user:");
    console.log(`   Email: ${newUser.email}`);
    console.log(`   Password: password123`);
    console.log(`   Role: ${newUser.role}`);
    console.log(`   ID: ${newUser.id_user}`);
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestUser();
