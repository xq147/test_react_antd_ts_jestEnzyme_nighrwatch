/**
 * @description Ajax 封装方法
 * @author cnn
 * **/
import { message, Modal } from 'antd';
import * as Qwest from 'qwest';

class AjaxUtils {
  public post: any;
  public get: any;

  constructor() {
    this.post = this.postFunc;
    this.get = this.getFunc;
  }

  private postFunc = (url: string, data: any, options: any, thenCallBack: any) => {
    return Qwest.post(url, data, options).then((xhr: any, data: any) => {
      if (data.hasOwnProperty('flag')) {
        if (data.flag === '4004') {
          Modal.warning({
            title: '警告',
            content: data.msg,
            okText: '确定',
            onOk: () => { window.location.href = 'logout'; }
          });
        }
        else if (data.flag === '1') {
          message.error('执行不成功');
        }
        else {
          thenCallBack(xhr, data);
        }
      } else {
        thenCallBack(xhr, data);
      }
    }).catch((e: any, xhr: any) => {
      if (xhr.status === '404') {
        message.error('服务未找到', 6);
      } else if (xhr.status === '500') {
        message.error('服务异常', 6);
      } else {
        message.error('未知异常', 6);
      }
    });
  };


  private getFunc = (url: string, data: any, options: any, thenCallBack: any) => {
    return Qwest.get(url, data, options).then((xhr, data) => {
      if (data.hasOwnProperty('flag')) {
        if (data.flag === '4004') {
          Modal.warning({
            title: '警告',
            content: data.msg,
            okText: '确定',
            onOk: () => { window.location.href = 'logout'; }
          });
        }
        else if (data.flag === '1') {
          message.error('执行不成功');
        } else {
          thenCallBack(xhr, data);
        }
      } else {
        thenCallBack(xhr, data);
      }
    }).catch((e, xhr, data) => {
      if (xhr.status === '404') {
        message.error('服务未找到', 6);
      } else if (xhr.status === '500') {
        message.error('服务异常', 6);
      } else {
        message.error('未知异常', 6);
      }
    });
  }
}

const Ajax = new AjaxUtils();
export default Ajax;

