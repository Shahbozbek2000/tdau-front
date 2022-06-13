import { CustomMask } from 'components/mask/customMask';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import PureModal from 'react-pure-modal';
import { useHistory } from 'react-router-dom';
import { admissionApi, authApi } from 'services/api/pagesApi';
import Button from '../../../button';
import { Modal } from 'antd';
import { fetchData } from 'hooks/useFetch';


export function Verify({
  setConfirmModel,
  setRegisterModel,
  confirmModel,
  phoneNumber
}) {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  let token = localStorage.getItem('token');
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [entityID, setEntityID] = useState([])
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    fetchData(admissionApi.allUniversityID(null), setEntityID, setLoader)
  }, [])
  async function onSubmit(data) {
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('phone', phoneNumber);
      formData.append('code', data?.code);
      let res = await authApi.verify(formData);
      localStorage.setItem('token', res?.token);
      if (res?.token) {
        localStorage.setItem('university_id', JSON.stringify(entityID ? entityID[0]?.id : 22));
      }
      setIsLoading(false);
      setConfirmModel(false);
      if (localStorage.getItem('university_id') !== undefined) {
        history.push('/university-admissions/personal-info');
      } else {
        history.push('/personal-info');
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }
  const handleCancel = () => {
    setConfirmModel(false);
  }

  console.log(entityID)
  return (
    <Modal title="Login Form" visible={confirmModel} footer={false} onCancel={handleCancel}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomMask
          Controller={Controller}
          control={control}
          nameProps="code"
          mask="1111"
          title="СМС-код"
          placeholder="----"
        />
        <p>
          <span>00:56</span>Отправить код ещё раз
        </p>
        <div className="footer-button__wrapper">
          <Button
            type="submit"
            title="Зарегистрироваться"
            disabled={isLoading}
          />
          <Button
            type="submit"
            title="Выход"
            bgColor="transparent"
            color="#2e7df6"
            onClick={() => {
              setConfirmModel(false);
              setRegisterModel(false);
            }}
          />
        </div>
      </form>
    </Modal>
  );
}
