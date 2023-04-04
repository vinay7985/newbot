// let login = document.getElementById("loginbtn");
// console.log(login);
// login.addEventListener("click", function(){
//     const email = document.getElementById("floatingInput").value;
//     const psw = document.getElementById("floatingPassword").value;
//     const form = new FormData(document.getElementById("login-form"));
//     alert(form);
//   });
// let tabId =  document.getElementById("loginbtn");
// chrome.scripting
//     .executeScript({
//       target : {tabId : tabId.id},
//       args : [ getTabId() ],
//       func: [getTabId]
//     })
//     .then(() => console.log("script injected"));

//     function getTabId() {
//       const tabid = "hello"; 
//       return tabid;
//       //console.log('hello');
//      }

// const filter = {
//   url: [
//     {
//       urlMatches: 'https://www.google.com/',
//     },
//   ],
// };

// chrome.webNavigation.onCompleted.addListener(() => {
//   console.info("The user has loaded my favorite website!");
// }, filter);

// function getTabId() {
//   //return document.getElementById("loginbtn");
//   return new Promise((resolve, reject) => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       if (tabs.length > 0) {
//         resolve(tabs[0].id);
//       } else {
//         reject(new Error("No active tab found"));
//       }
//     });
//   });
// }

// chrome.scripting.executeScript({
//   target: { tabId: getTabId() },
//   function: () => {
//     console.log('hello');
//   }
// });
