import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';

type CustomIcon = 'success' | 'error' | 'warning' | 'info' | 'question';

interface AlertModalProps {
  icon: CustomIcon;
  title: string;
  msg: string;
  btn1?: string;
  btn1Color?: string;
  btn2?: string;
  btn2Color?: string;

  onClose: () => void;
  onCancel?: () => void;
}

function AlertModal({
  icon,
  title,
  msg,
  btn1,
  btn1Color,
  btn2,
  btn2Color,
  onClose,
  onCancel,
}: AlertModalProps) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options: any = {
      icon,
      title,
      text: msg,
      confirmButtonText: btn1,
      confirmButtonColor: btn1Color ?? ' #0075ff',
    };

    if (btn2) {
      options.showCancelButton = true;
      options.cancelButtonText = btn2;
      options.cancelButtonColor = btn2Color ?? 'red';
    }

    Swal.fire(options).then((result) => {
      if (result.isConfirmed) {
        onClose();
      } else if (result.dismiss === Swal.DismissReason.cancel && onCancel) {
        onCancel();
      }
    });
  }, []);

  return null;
}

export default AlertModal;
