const base = 'http://192.168.12.77:8080/';

let API = {
  me: {
    id: 1001,
    url: base + 'user/me',
  },
  signIn: {
    id: 1002,
    url: base + 'user/signIn',
  },
  signOut: {
    id: 1003,
    url: base + 'user/signOut',
  },
  signUp: {
    id: 1004,
    url: base + 'user/signUp',
  },
  userlist: {
    id: 1005,
    url: base + 'admin/list',
  },
  userRegister: {
    id: 1006,
    url: base + 'user/userRegister',
  },
  userUpdate: {
    id: 1007,
    url: base + 'user/userUpdate',
  },
  userDeleteOrDeactive: {
    id: 1008,
    url: base + 'user/userDeleteOrDeactive',
  },
  forgotPassword: {
    id: 1009,
    url: base + 'user/forgotPassword',
  },
  itemAdd: {
    id: 2001,
    url: base + 'item/add',
  },
  itemScanDate: {
    id: 2002,
    url: base + 'item/sendDate',
  },
};
export const scanQRCode = async (userRequest) => {
  let api = API.itemAdd;
  var url = api.url;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceID: userRequest.d,
        qrcodeStr: userRequest.e,
        accesState: userRequest.a,
      }),
    });
    return response;
  } catch (error) {
    console.log({error: error});
    return 'networkError';
  }
};
export const readDates = async (userRequest) => {
  let api = API.itemScanDate;
  var url = api.url;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceID: userRequest.d,
        startDate: userRequest.s,
        endDate: userRequest.e,
      }),
    });
    return response;
  } catch (error) {
    console.log({error: error});
    return 'networkError';
  }
};
export const logIn = async (userRequest) => {
  let api = API.signIn;
  var url = api.url;
  console.log(userRequest);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: userRequest.p,
        username: userRequest.u,
      }),
    });
    const resp = await response.json();
    return resp;
  } catch (error) {
    console.log({error: error});
    return 'networkError';
  }
};
export const logUp = async (userRequest) => {
  let api = API.signUp;
  var url = api.url;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: userRequest.p,
        username: userRequest.u,
      }),
    });
    console.log(await response.json());
    return response;
  } catch (error) {
    console.log({error: error});
    return 'networkError';
  }
};
export const logOut = async (userRequest) => {
  let api = API.signOut;
  var url = api.url;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userRequest,
      }),
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log({error: error});
    return 'networkError';
  }
};
export const getUserList = async (userRequest) => {
  let api = API.userlist;
  var url = api.url;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceID: userRequest.d,
        startDate: userRequest.s,
        endDate: userRequest.e,
      }),
    });
    return response;
  } catch (error) {
    console.log({error: error});
    return 'networkError';
  }
};
