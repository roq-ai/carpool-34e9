import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  vehicle_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
