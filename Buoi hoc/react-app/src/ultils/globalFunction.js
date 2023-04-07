export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const routerData = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: "/todo",
    name: 'TodoMain',
  },
  {
    path: "/parent",
    name: 'Parent',
  },
  {
    path: "/post",
    name: 'Post',
  },

];
