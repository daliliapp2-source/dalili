// import React from 'react';
// import ProfileEditForm from './clients';
// import { getProfileById, isFreeUser } from '../../actions';
// import { notFound } from 'next/navigation';



// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// export default async function EditProfilePage(props: PageProps) {
//      const { id } = await props.params;
//     const data = await getProfileById(id)
//     const isFree = await isFreeUser();
//     if (!data) {
//         notFound()
//     }
//   return (
//     <div className="max-w-4xl mx-auto py-10">
//       <ProfileEditForm profileData={data} isFree={isFree}  />
//     </div>
//   );
// }





"use server";

import { notFound } from "next/navigation";
import { getProfile, updateProfile } from "./actions";
import { MenuItem } from "@/components/templates/new/t8tempo/mock"; // تأكد من المسار الصحيح للـ MenuItem
import ProfileEditFormClient from "./clients";
import { getUserPlanAndItems } from "../../add/new/actions";


interface EditPageProps {
  params: {
    id: string; // الـ ID القادم من الـ URL
  };
}

// لكي يستطيع الـ Server Component جلب البيانات
async function getInitialData(id: string) {
  
  const profileResponse = await getProfile(id);
  if (!profileResponse.status || !profileResponse.data) {
   
    return notFound();
  }

  return {
    initialProfile: profileResponse.data,
    availableItems: profileResponse.data.selectedItems
  };
}


export default async function EditProfilePage({ params }: EditPageProps) {

  const { id: profileId } = await params;
  
  // 1. جلب البيانات الأولية
  const { initialProfile, availableItems } = await getInitialData(profileId);
   const {isfree , items} = await getUserPlanAndItems();
//   // 2. ربط دالة التحديث مع الـ ID لتمريرها للـ Client Component
//   const boundUpdateAction = updateProfile.bind(null, profileId);

  const actions = {
    // نستخدم الـ bound action
    updateProfile: updateProfile,
  };

  return (
    <ProfileEditFormClient
      isFreePlan={isfree}
      items={items}
      //mn={isMaxProfilesReached} 
      actions={actions}
      initialData={initialProfile}
    />
  );
}