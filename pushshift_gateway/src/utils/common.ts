export const responseTemplate = (message: string, response: any) => {

  return {
    message,
    data: response
  }
}

export const messages = (type: string, service: string) => {
  if (type == 'OK') {

    return `Success transaction ${service}.`;
  }

  if (type == 'ERR') {

    return `Failed transaction ${service}.`;
  } 

  return type;

}