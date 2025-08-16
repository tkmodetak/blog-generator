module.exports = async (req, res) => {
  console.log('Webhook test received');
  console.log('Method:', req.method);
  console.log('Headers:', JSON.stringify(req.headers));
  console.log('Body:', JSON.stringify(req.body));

  // CORSëŒâû
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-line-signature');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // èÌÇ…200Çï‘Ç∑
  res.status(200).json({ 
    success: true, 
    message: 'Webhook received successfully',
    timestamp: new Date().toISOString()
  });
};