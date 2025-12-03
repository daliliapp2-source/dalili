/*

// import { LogoutButton } from "@/components/landing/loginbutton";
// import { createClient } from "@/lib/supabase/server";

// export default async function Dashboard() {
//    const supabase = await createClient()
//   const { data: { user } } = await supabase.auth.getUser()

//   if (!user) return <p>يجب تسجيل الدخول أولاً</p>

//   return (
//     <div>
//       <h1>مرحبًا، {user.email}</h1>
//       <p>Dashboard الخاص بك جاهز.</p>
//       <LogoutButton />
//     </div>
//   );
// }


// app/dashboard/page.tsx
import { DB } from "@/lib/db/repo";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export default async function Dashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return <p>يجب تسجيل الدخول أولاً</p>;

  // جلب كل الكاتيجوريز الخاصة باليوزر
  const { data: categories, error } = await DB.categories.getAll(user.id);

  if (error) return <p>حدث خطأ أثناء جلب التصنيفات: {error.message}</p>;

  return (
    <div>
      <h1>مرحبًا، {user.email}</h1>
      <p>لوحة التحكم الخاصة بك</p>

      <AddCategoryForm userId={user.id} />

      <h2>التصنيفات الحالية:</h2>
      <ul>
        {categories?.map(cat => (
          <li key={cat.id}>
            <CategoryItem category={cat} userId={user.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// ----------------------------------------
// إضافة تصنيف جديد
// ----------------------------------------
async function AddCategoryForm({ userId }: { userId: string }) {
  async function handleSubmit(formData: FormData) {
    "use server";

    const name = formData.get("name")?.toString() || "";
    if (!name) return;

    await DB.categories.create({ user_id: userId, name });
    revalidatePath("/dashboard"); // لتحديث الصفحة بعد الإضافة
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="name" placeholder="اسم التصنيف" required />
      <button type="submit">إضافة تصنيف</button>
    </form>
  );
}

// ----------------------------------------
// عرض وتعديل وحذف تصنيف
// ----------------------------------------
function CategoryItem({ category, userId }: { category: { id: string; name: string }, userId: string }) {

  async function handleUpdate(formData: FormData) {
    "use server";

    const newName = formData.get("name")?.toString();
    if (!newName) return;

    await DB.categories.update(category.id, { name: newName });
    revalidatePath("/dashboard"); // إعادة تحميل الصفحة
  }

  async function handleDelete() {
    "use server";

    await DB.categories.delete(category.id);
    revalidatePath("/dashboard");
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <form action={handleUpdate} style={{ display: "inline-block", marginRight: "10px" }}>
        <input type="text" name="name" defaultValue={category.name} />
        <button type="submit">تعديل</button>
      </form>
      <button onClick={handleDelete}>حذف</button>
    </div>
  );
}


*/
'use server';
import { createClient } from "@/lib/supabase/server"
import { getDashboardData , asyncProfileData , deleteProfileFully } from "./actions/servaction"
import ClientDashboard from "./components/clientcomponents"
import { GeneralResponse } from "@/lib/db/repo";

// this will be a server component

export default async function Dashboard() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()
  const user = data?.user

  if (!user) return <div>يرجى تسجيل الدخول</div>

  const { profiles, plan } = await getDashboardData()

  if (profiles !== null && plan !== null) {
     return <ClientDashboard profiles={profiles} currentPlan={plan}
      actions={{
       acyncProfile: asyncProfileData,
      // qrProfile: getProfileQrCode,
       deleteProfile: deleteProfileFully
     }}  />
  }
 



}
