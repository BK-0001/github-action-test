// const fetchWrapper = async (url: string): Promise<any> => {
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error("Something has gone wrong while getting the data");
//   }

//   return response.json();
// };

// describe("Fetch Wrapper Function", () => {
//   it("should return the data when url is sent out correctly", async () => {
//     const result = await fetchWrapper(
//       "https://api.thecatapi.com/v1/images/search"
//     );

//     expect(result).toBeDefined();
//   });
//   it("should catch error if my url is not correct", async () => {
//     try {
//       await fetchWrapper("http");
//     } catch (error) {
//       expect(error).toBeDefined();
//     }
//   });
// });
