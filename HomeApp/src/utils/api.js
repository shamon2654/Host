import axios from "axios"

export const API_URL =
  "https://c340c21d-cbd4-4d1d-8eb5-6a5575bdf0fe.mock.pstmn.io"

export const saveData = async (data, token) => {
  try {
    const response = await axios.post(`${API_URL}/save`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    console.error(
      "Error during save:",
      error.response?.data?.message || error.message
    )
    throw error
  }
}
