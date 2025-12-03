import Swal from 'sweetalert2';
export const toastError = (title = 'Error', message = 'Error al guardar registro') => {
  Swal.fire({
    icon: "error",
    title: title,
    text: message,
    showCloseButton: true,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  });
}

export const toastSuccess = (title = 'Éxito', message = 'Registro guardado con éxito') => {
  Swal.fire({
    icon: "success",
    title: title,
    text: message,
    showCloseButton: true,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  });
}