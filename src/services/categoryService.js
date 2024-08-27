export const getAllCategories = async () => {
  try {
    const response = await fetch("http://localhost:8088/categories");
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
