import { message, notification } from 'ant-design-vue';

export const antMessage = (data, type) => {
  if (type === 1) {
    message.success(data);
  } else if (type === 2) {
    message.error(data);
  } else if (type === 3) {
    message.warning(data);
  } else {
    message.info(data);
  }
};

export const antNotification = (title, data, type) => {
  notification[type]({
    message: title,
    description: data
  });
};
