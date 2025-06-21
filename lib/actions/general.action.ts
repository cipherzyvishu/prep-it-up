import { db } from "@/firebase/admin";

export async function getInterviewsByUserId(
  userId: string
): Promise<Interview[] | null> {
  try {
    const interviews = await db
      .collection("interviews")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .get();

    console.log("✅ Number of interviews found:", interviews.size);
    console.log("🔎 Fetching interviews for userId:", userId);

    return interviews.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Interview[];
  } catch (e: any) {
    console.error("🔥 Firestore query error:", e.code, e.message);
    return null;
  }
}

export async function getLatestInterviews(
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;
  const interviews = await db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("finalized", "==", true)
    .where("userId", "!=", userId)
    .limit(limit)
    .get();

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}


export async function getInterviewsById(
  id: string
): Promise<Interview | null> {

    const interview = await db
      .collection("interviews")
      .doc(id)
        .get();
        
        return interview.data() as Interview | null

    
}