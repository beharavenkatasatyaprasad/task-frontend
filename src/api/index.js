import axios from "axios";
import { getConfig } from "../constants/config-handler";
import constants from "../constants";

const api = (method, url, data, token = null) => {
  if (token) {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };
  }
  return axios({
    method: method,
    url: `${getConfig().ROOT_URL}${url}`,
    data: data,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

const apiExport = (method, url, data, token = null) => {
  if (token) {
    axios.defaults.headers = {
      'Content-Type': 'application/json',
    };
  }
  return axios({
    method: method,
    url: `${getConfig().ROOT_URL}${url}`,
    data: data,
    responseType: 'arraybuffer',
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

export const getAgents = () => {
  return api("get", constants.API.GETaGENTS)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const getAgentDetails = (id) => {
  return api("get", constants.API.GETaGENTdETAILS+ id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const createAgent = (data) => {
  return api("post", constants.API.CREATEaGENT, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const importAgents = (data) => {
  return api("post", constants.API.IMPORTbULKaGENTS, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const exportAgents = () => {
  return apiExport("GET", constants.API.EXPORTbULKaGENTS)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const updateAgent = (id, data) => {
  return api("put", constants.API.UPDATEaGENT + id, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const deleteAgent = (id, data) => {
  return api("delete", constants.API.DELETEaGENT + id, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
