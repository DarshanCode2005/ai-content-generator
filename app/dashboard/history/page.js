import { db } from '@/utils/db'
import { AIOutput } from "@/utils/schema";
import History from "./History"; // Import Client Component

const HistoryPage = async () => {
  let history = [];
  try {
    history = await db.select().from(AIOutput).orderBy(AIOutput.createdAt);
    console.log("Fetched history:", history);
  } catch (error) {
    console.error("Error fetching history:", error);
  }

  return <History history={history} />;
};

export default HistoryPage;
