import axios from "axios";

export const apiKey = process.env.REACT_APP_API_KEY;
export const apiToken = process.env.REACT_APP_TOKEN;
export const baseTrelloUrl = "https://api.trello.com/1/";
export const baseRandomUserUrl = "https://randomuser.me/api";
export const getUrl = {
  method: "get",
  url: baseRandomUserUrl,
};

export const getBoard = {
  method: "get",
  url: `${baseTrelloUrl}members/me/boards?key=${apiKey}&token=${apiToken}`,
};

export const getLists = (id) => {
  return {
    method: "get",
    url: `${baseTrelloUrl}boards/${id}/lists?key=${apiKey}&token=${apiToken}`,
  };
};
export const getCards = {
  method: "get",
  url: `${baseTrelloUrl}cards/61152d0073530127363cd062?key=${apiKey}&token=${apiToken}`,
};

const randomAxios = axios.create({
  baseURL: baseRandomUserUrl,
});

const trelloAxios = axios.create({
  baseURL: baseTrelloUrl,
});

export { randomAxios, trelloAxios };
