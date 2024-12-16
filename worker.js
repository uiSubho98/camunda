// Import express module using ES module syntax
import express from 'express';

const app = express();

// Define the port
const PORT = 5000;

// Simulate a credit check (in a real-world app, you would call an external API or service)
const getCreditCheck = () => {
  // Here you can simulate the credit check logic.
  // For now, let's assume the result is "Approved".
  return "Approved"; // Change to "Denied" to simulate a denied credit check
};

// Define the route for credit check
app.get('/credit-check', (req, res) => {
  // Get the credit check status
  const creditCheckStatus = getCreditCheck();

  // Return the credit check status as a JSON response
  res.json({
    creditCheck: creditCheckStatus
  });
});

// Simulate an Order Property Appraisal API
const getPropertyAppraisal = async (propertyId) => {
  // In a real-world app, you'd make a request to a property appraisal API.
  // For now, we simulate it with a mock response.

  // Example: Let's pretend we're calling an external API to get the appraisal
  // const response = await axios.get(`https://api.example.com/appraisal/${propertyId}`);

  // Simulated response
  return {
    propertyId: propertyId,
    appraisalValue: Math.floor(Math.random() * 1000000) + 100000,  // Random appraisal value
    status: "Completed",
    date: new Date().toISOString().split('T')[0]
  };
};

// Define the route to get property appraisal
app.get('/order-property-appraisal/:propertyId', async (req, res) => {
  const propertyId = req.params.propertyId;

  try {
    // Call the function that simulates getting the property appraisal data
    const appraisalData = await getPropertyAppraisal(propertyId);

    // Return the appraisal data as a JSON response
    res.json({
      status: 'success',
      data: appraisalData
    });

  } catch (error) {
    // If there's an error, return a failure response
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

// Define the route that returns the dummy response to notify applicant where mail sent rejection
app.post('/send-mail', (req, res) => {
  res.json({ response: "Mail of rejection sent" });
});



//send loan agreement

app.post('/sendLoanAgreement', (req, res) => {
  // Extract the incoming request body
  const requestBody = req.body;

  // Respond with the same data received
  res.json({
    message: "Loan agreement received and echoed back.",
    data: requestBody
  });
});




app.post('/generateLoanAgreement', (req, res) => {

  // Respond with the same data received
  res.json({
    message: "Loan agreement generated .",
  
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
