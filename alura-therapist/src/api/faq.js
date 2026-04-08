// # FAQ API calls

import axios from "axios";

const API_BASE_URL = "https://alurareset.com/api";

export const getFAQs = async () => {
  try {
    console.log("📡 Making API call to:", `${API_BASE_URL}/faqs/getAll`);
    const response = await axios.get(`${API_BASE_URL}/faqs/getAll`);
    
    console.log("📥 Raw API response:", response.data);
    
    // Backend returns { success: true, data: [...] }
    if (response.data && response.data.success) {
      console.log("✅ API Success! Returning FAQs array:", response.data.data);
      return response.data.data; // Return the actual FAQs array
    }
    
    console.warn("⚠️ API returned success: false or invalid format");
    throw new Error("Invalid response format");
  } catch (error) {
    console.error("❌ API Error:", error);
    if (error.response) {
      throw new Error(error.response.data.message || "Failed to fetch FAQs");
    } else if (error.request) {
      throw new Error("Network error. Please check your connection.");
    } else {
      throw new Error(error.message || "An unexpected error occurred");
    }
  }
};