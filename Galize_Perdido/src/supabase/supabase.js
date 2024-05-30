import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://zfbfmemdhmuthejffthp.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmYmZtZW1kaG11dGhlamZmdGhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMjc3NTEsImV4cCI6MjAzMjYwMzc1MX0.R8rUVU0eBVhYrc4HEdKVn78FAk_j-4WA9qCNEofplO4";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
