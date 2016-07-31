module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'cheatsheets',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
