// /app/actions/update-row-order.ts
"use server";

import { supabase } from "@/lib/supabaseClient";

interface RowOrder {
  id: string;
  order: number;
  name: string;
}

export default async function updateRowOrder(rowOrders: RowOrder[]) {
  console.log(rowOrders);
  // const updates = Object.fromEntries(
  //   columns.map(({ id, order }) => [id, { order }])
  // );

  // const { error } = await supabase.rpc("update_column_order", {
  //   updates: updates,
  // });

  // if (error) {
  //   console.error("❌ updateColumnOrder error:", error);
  //   throw new Error(`カラムの順序更新に失敗しました: ${error.message}`);
  // }

  // console.log("✅ Column order updated successfully!");
}