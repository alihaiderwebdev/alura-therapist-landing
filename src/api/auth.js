//  # login, signup API calls


import axios from "axios";

const API_BASE_URL = "https://alurareset.com/api";

export const loginUser = async (data) => {
  try {
    // Only send the required fields to backend
    const payload = {
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe
    };
    
    const response = await axios.post(`${API_BASE_URL}/user/login`, payload);
    
    // Backend returns { success: true/false, message: "...", token: "...", user: {...} }
    if (response.data && response.data.success) {
      return response.data; // Return full response with token and user
    } else {
      // Backend returned success: false
      throw new Error(response.data.message || "Login failed");
    }
  } catch (error) {
    if (error.response && error.response.data) {
      // Backend error response (e.g., { success: false, message: "email not found" })
      throw new Error(error.response.data.message || "Login failed");
    } else if (error.request) {
      throw new Error("Network error. Please check your connection.");
    } else {
      throw new Error(error.message || "An unexpected error occurred");
    }
  }
};

export const signupUser = async (data) => {
  try {
    // Only send the required fields to backend
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNo: data.phoneNo,
      password: data.password
    };
    
    const response = await axios.post(`${API_BASE_URL}/user/signup`, payload);
    
    // Backend returns { success: true/false, message: "...", token: "...", user: {...} }
    if (response.data && response.data.success) {
      return response.data; // Return full response with token and user
    } else {
      // Backend returned success: false
      throw new Error(response.data.message || "Signup failed");
    }
  } catch (error) {
    if (error.response && error.response.data) {
      // Backend error response
      throw new Error(error.response.data.message || "Signup failed");
    } else if (error.request) {
      throw new Error("Network error. Please check your connection.");
    } else {
      throw new Error(error.message || "An unexpected error occurred");
    }
  }
};