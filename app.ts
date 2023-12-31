const express = require('express');
const multer = require('multer');
const swaggerUi = require('swagger-ui-express');
const { Pool } = require('pg');
const fs = require('fs');
require('dotenv').config();

const app = express();
const upload = multer();

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

app.use(express.json());


      
const createTableQuery = `
CREATE TABLE IF NOT EXISTS firstock (
  account_id VARCHAR(20) UNIQUE PRIMARY KEY,
  account_name VARCHAR(255),
  user_id VARCHAR(255),
  region VARCHAR(255),
  reserved1 VARCHAR(255),
  reserved2 VARCHAR(255),
  email_id VARCHAR(255),
  address VARCHAR(255),
  office_address VARCHAR(255),
  office_contact_number VARCHAR(255),
  mobile_number VARCHAR(255),
  family_id VARCHAR(255),
  dp_acct_number1 VARCHAR(255),
  dp_acct_number2 VARCHAR(255),
  dp_acct_number3 VARCHAR(255),
  display_precision VARCHAR(255),
  pan VARCHAR(255),
  account_type VARCHAR(255),
  bank_account_number VARCHAR(255),
  ifsc_code VARCHAR(255),
  bank_name VARCHAR(255),
  bank_address VARCHAR(255),
  account_status VARCHAR(255),
  profile_name VARCHAR(255),
  role_name VARCHAR(255),
  reserved3 VARCHAR(255),
  user_access_type VARCHAR(255),
  reserved4 VARCHAR(255),
  max_contract_subscription VARCHAR(255),
  dp_type VARCHAR(255),
  dp VARCHAR(255),
  remarks VARCHAR(255),
  broker_id VARCHAR(255),
  products_enabled VARCHAR(255),
  reserved5 VARCHAR(255),
  reserved6 VARCHAR(255),
  reserved7 VARCHAR(255),
  reserved8 VARCHAR(255),
  reserved9 VARCHAR(255),
  password_reset VARCHAR(255),
  reserved10 VARCHAR(255),
  reserved11 VARCHAR(255),
  dob VARCHAR(255),
  reserved12 VARCHAR(255),
  reserved13 VARCHAR(255),
  user_status VARCHAR(255),
  sms_email_event VARCHAR(255),
  frequency VARCHAR(255),
  sms_email VARCHAR(255),
  reserved14 VARCHAR(255),
  reserved15 VARCHAR(255),
  reserved16 VARCHAR(255),
  reserved17 VARCHAR(255),
  user_first_name VARCHAR(255),
  user_last_name VARCHAR(255),
  account_overview VARCHAR(255),
  reserved18 VARCHAR(255),
  pending_order_limit INT,
  turnover_limit INT,
  reserved19 VARCHAR(255),
  residence_contact_number VARCHAR(255),
  reserved20 VARCHAR(255),
  reserved21 VARCHAR(255),
  reserved22 VARCHAR(255),
  reserved23 VARCHAR(255),
  bank_account_number2 VARCHAR(255),
  ifsc_code2 VARCHAR(255),
  bank_name2 VARCHAR(255),
  bank_address2 VARCHAR(255),
  bank_account_number3 VARCHAR(255),
  ifsc_code3 VARCHAR(255),
  bank_name3 VARCHAR(255),
  bank_address3 VARCHAR(255),
  bank_account_number4 VARCHAR(255),
  ifsc_code4 VARCHAR(255),
  bank_name4 VARCHAR(255),
  bank_address4 VARCHAR(255),
  bank_account_number5 VARCHAR(255),
  ifsc_code5 VARCHAR(255),
  bank_name5 VARCHAR(255),
  bank_address5 VARCHAR(255),
  bank_account_number6 VARCHAR(255),
  ifsc_code6 VARCHAR(255),
  bank_name6 VARCHAR(255),
  bank_address6 VARCHAR(255),
  UNIQUE(account_id),
  updated_time TIMESTAMP DEFAULT current_timestamp,
  created_time TIMESTAMP DEFAULT current_timestamp
)

`;

      
      pool.query(createTableQuery)
        .then(() => {
          console.log('Table created successfully');
        })
        .catch(error => {
          console.error('Error creating table:', error);
        });
        

        const insertQuery = `
            INSERT INTO firstock (account_id, account_name, user_id, region, reserved1, reserved2, email_id, address, office_address,
              office_contact_number, mobile_number, family_id, dp_acct_number1, dp_acct_number2, dp_acct_number3,
              display_precision, pan, account_type, bank_account_number, ifsc_code, bank_name, bank_address,
              account_status, profile_name, role_name, reserved3, user_access_type, reserved4, max_contract_subscription,
              dp_type, dp, remarks, broker_id, products_enabled, reserved5, reserved6, reserved7, reserved8,
              reserved9, password_reset, reserved10, reserved11, dob, reserved12, reserved13, user_status,
              sms_email_event, frequency, sms_email, reserved14, reserved15, reserved16, reserved17, user_first_name,
              user_last_name, account_overview, reserved18, pending_order_limit, turnover_limit, reserved19,
              residence_contact_number, reserved20, reserved21, reserved22, reserved23, bank_account_number2,
              ifsc_code2, bank_name2, bank_address2, bank_account_number3, ifsc_code3, bank_name3, bank_address3,
              bank_account_number4, ifsc_code4, bank_name4, bank_address4, bank_account_number5, ifsc_code5,
              bank_name5, bank_address5, bank_account_number6, ifsc_code6, bank_name6, bank_address6)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,$21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56,$57, $58, $59, $60, $61, $62, $63, $64, $65, $66, $67, $68, $69, $70, $71, $72, $73, $74,$75, $76, $77, $78, $79, $80, $81, $82, $83, $84, $85)
            ON CONFLICT (account_id) DO UPDATE SET
  account_name = EXCLUDED.account_name,
  user_id = EXCLUDED.user_id,
  region = EXCLUDED.region,
  reserved1 = EXCLUDED.reserved1,
  reserved2 = EXCLUDED.reserved2,
  email_id = EXCLUDED.email_id,
  address = EXCLUDED.address,
  office_address = EXCLUDED.office_address,
  office_contact_number = EXCLUDED.office_contact_number,
  mobile_number = EXCLUDED.mobile_number,
  family_id = EXCLUDED.family_id,
  dp_acct_number1 = EXCLUDED.dp_acct_number1,
  dp_acct_number2 = EXCLUDED.dp_acct_number2,
  dp_acct_number3 = EXCLUDED.dp_acct_number3,
  display_precision = EXCLUDED.display_precision,
  pan = EXCLUDED.pan,
  account_type = EXCLUDED.account_type,
  bank_account_number = EXCLUDED.bank_account_number,
  ifsc_code = EXCLUDED.ifsc_code,
  bank_name = EXCLUDED.bank_name,
  bank_address = EXCLUDED.bank_address,
  account_status = EXCLUDED.account_status,
  profile_name = EXCLUDED.profile_name,
  role_name = EXCLUDED.role_name,
  reserved3 = EXCLUDED.reserved3,
  user_access_type = EXCLUDED.user_access_type,
  reserved4 = EXCLUDED.reserved4,
  max_contract_subscription = EXCLUDED.max_contract_subscription,
  dp_type = EXCLUDED.dp_type,
  dp = EXCLUDED.dp,
  remarks = EXCLUDED.remarks,
  broker_id = EXCLUDED.broker_id,
  products_enabled = EXCLUDED.products_enabled,
  reserved5 = EXCLUDED.reserved5,
  reserved6 = EXCLUDED.reserved6,
  reserved7 = EXCLUDED.reserved7,
  reserved8 = EXCLUDED.reserved8,
  reserved9 = EXCLUDED.reserved9,
  password_reset = EXCLUDED.password_reset,
  reserved10 = EXCLUDED.reserved10,
  reserved11 = EXCLUDED.reserved11,
  dob = EXCLUDED.dob,
  reserved12 = EXCLUDED.reserved12,
  reserved13 = EXCLUDED.reserved13,
  user_status = EXCLUDED.user_status,
  sms_email_event = EXCLUDED.sms_email_event,
  frequency = EXCLUDED.frequency,
  sms_email = EXCLUDED.sms_email,
  reserved14 = EXCLUDED.reserved14,
  reserved15 = EXCLUDED.reserved15,
  reserved16 = EXCLUDED.reserved16,
  reserved17 = EXCLUDED.reserved17,
  user_first_name = EXCLUDED.user_first_name,
  user_last_name = EXCLUDED.user_last_name,
  account_overview = EXCLUDED.account_overview,
  reserved18 = EXCLUDED.reserved18,
  pending_order_limit = EXCLUDED.pending_order_limit,
  turnover_limit = EXCLUDED.turnover_limit,
  reserved19 = EXCLUDED.reserved19,
  residence_contact_number = EXCLUDED.residence_contact_number,
  reserved20 = EXCLUDED.reserved20,
  reserved21 = EXCLUDED.reserved21,
  reserved22 = EXCLUDED.reserved22,
  reserved23 = EXCLUDED.reserved23,
  bank_account_number2 = EXCLUDED.bank_account_number2,
  ifsc_code2 = EXCLUDED.ifsc_code2,
  bank_name2 = EXCLUDED.bank_name2,
  bank_address2 = EXCLUDED.bank_address2,
  bank_account_number3 = EXCLUDED.bank_account_number3,
  ifsc_code3 = EXCLUDED.ifsc_code3,
  bank_name3 = EXCLUDED.bank_name3,
  bank_address3 = EXCLUDED.bank_address3,
  bank_account_number4 = EXCLUDED.bank_account_number4,
  ifsc_code4 = EXCLUDED.ifsc_code4,
  bank_name4 = EXCLUDED.bank_name4,
  bank_address4 = EXCLUDED.bank_address4,
  bank_account_number5 = EXCLUDED.bank_account_number5,
  ifsc_code5 = EXCLUDED.ifsc_code5,
  bank_name5 = EXCLUDED.bank_name5,
  bank_address5 = EXCLUDED.bank_address5,
  bank_account_number6 = EXCLUDED.bank_account_number6,
  ifsc_code6 = EXCLUDED.ifsc_code6,
  bank_name6 = EXCLUDED.bank_name6,
  bank_address6 = EXCLUDED.bank_address6,
  updated_time = current_timestamp `;

          app.get('/uploads', async (req, res) => {
            try {
              const query = 'SELECT * FROM firstock';
              const result = await pool.query(query);
              const data = result.rows;
          
              res.status(200).json(data);
            } catch (error) {
              console.error('Error retrieving data:', error);
              res.status(500).json({ message: 'An error occurred while retrieving data' });
            }
          });
          
          
          
          app.post('/upload', upload.single('file'), async (req, res,next) => {
            try {
              const fileSizeLimit = 10 * 1024; // 10KB
          
              if (!req.file) {
                res.status(400).json({ message: 'No file uploaded' });
                return;
              }
          
              if (req.file.size > fileSizeLimit) {
                res.status(400).json({ message: 'File size exceeds the limit' });
                return;
              }
              const fileContent = req.file.buffer.toString('utf-8');
              const rows = fileContent.split('\r\n');
              const data = rows.map(row => {
                const columns = row.split('|');
                const trimmedColumns = columns.map(column => column.trim());
                return trimmedColumns;
              });
              
          for (const row of data) {
            const Row = row.map(value => value === '' ? null : value);
            await pool.query(insertQuery, Row);
          }
      
          const uploadedDataQuery = 'SELECT * FROM firstock';
          const uploadedDataResult = await pool.query(uploadedDataQuery);
          const uploadedData = uploadedDataResult.rows;
      
         
    res.status(200).json({ message: 'File uploaded and inserted into the database successfully', uploadedData });
  } catch (error) {
    console.error(error);
    next(error); 
  }
});


app.use((err, req, res, next) => {
  if (err.code === 'LIMIT_FILE_SIZE') {
    res.status(400).json({ message: 'File size exceeds the limit' });
  } else {
    res.status(500).json({ message: 'An error occurred during file upload', error: err.message });
  }
});
   
      // Swagger UI 
      const swaggerDocument = require('./swagger.json');
      app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
      
      
      // server
      const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});