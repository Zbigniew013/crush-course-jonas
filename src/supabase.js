import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xzjrcnwitlpymtktojtd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6anJjbndpdGxweW10a3RvanRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE3MzQ3NzgsImV4cCI6MTk4NzMxMDc3OH0.AY3l_mkh0LW_3GbJUyLYrWgZEFXPd-NOKZ7S2BxPOko";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
