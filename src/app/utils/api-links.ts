const authUrl = process.env.REACT_APP_AUTH_URL;

const apiLinks = {
  customer: {
    get: `${authUrl}/api/customer`,
    getTotal: `${authUrl}/api/customer/total`
  },
  order: {
    get: `${authUrl}/api/order`,
    getTotal: `${authUrl}/api/order/total`,
    getRevenue: `${authUrl}/api/order/revenue`,
    getStatus: `${authUrl}/api/order/status/`,
    getOrderDate: `${authUrl}/api/order/order_date`
  },
  store: {
    get: `${authUrl}/api/store`,
    getTotal: `${authUrl}/api/store/total`
  },
};

export default apiLinks;
