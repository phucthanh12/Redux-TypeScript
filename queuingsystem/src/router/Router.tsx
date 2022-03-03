import React from 'react';
import { useRoutes } from 'react-router-dom';
import ForGotPass from '../Pages/user/ForGotPass';
import Login from '../Pages/user/Login';
import TemplateUser from '../Pages/user/TemplateUser';
import img1 from '../Assets/images/loginpic.png';
import img2 from '../Assets/images/resetpwpic.png';
import NewPass from '../Pages/user/NewPass';
import Template from '../Pages/Template';
import Info from '../Pages/Home/Info';
import HeaderInfo from '../Pages/Home/HeaderInfo';
import DashboardMain from '../Pages/Home/DashboardMain';

import DeviceManager from '../Pages/equipment/DeviceManager';
import ProtectedRouters from '../ProtectedRouters';

import AccountManager from '../Pages/manage/Account/AccountManager';

import AddAccount from '../Pages/manage/Account/AddAccount';
import TemplateFormAdd from '../Pages/TemplateFormAdd';
import TemplateFormDetail from '../Pages/equipment/TemplateFormDetail';
import { EquipSelector, RandomSelector } from '../Redux/selector';
import { useSelector } from 'react-redux';
import ServiceManager from '../Pages/service/ServiceManager';
import TemplateFormService from '../Pages/service/TemplateFormService';
import TemplateFormDetailService from '../Pages/service/TemplateFormDetailService';
import RandomManager from '../Pages/random/RandomManager';
import AddRandom from '../Pages/random/AddRandom';
import ReportManager from '../Pages/report/ReportManager';
import UserManager from '../Pages/manage/User/UserManager';
import RoleManager from '../Pages/manage/Role/RoleManager';

import FormRole from '../Pages/manage/Role/FormRole';

const Router = () => {
  const equipment = useSelector(EquipSelector);
  const Random = useSelector(RandomSelector);

  let routes = useRoutes([
    {
      path: '/',
      element: (
        <TemplateUser pic={img1} tittle="Quản lí xếp hàng">
          <Login />
        </TemplateUser>
      ),
    },
    // user
    {
      path: '/user',
      children: [
        {
          path: 'forgotPass',
          element: (
            <TemplateUser pic={img2}>
              <ForGotPass />
            </TemplateUser>
          ),
        },
        {
          path: 'newPass',
          element: (
            <TemplateUser pic={img2}>
              <NewPass />
            </TemplateUser>
          ),
        },
        // { path: "", element: <PageLogin /> },
      ],
    },
    {
      element: <ProtectedRouters />,
      children: [
        {
          path: '/dashboard',
          element: (
            <Template>
              <HeaderInfo title="Thông tin cá nhân" bgcolorright="#fff" />
              <DashboardMain />
            </Template>
          ),
        },
        {
          path: '/info',
          element: (
            <Template>
              <Info />
            </Template>
          ),
        }, // // equipment
        {
          path: '/equipment',
          children: [
            {
              path: 'add',
              element: (
                <Template>
                  <HeaderInfo
                    title="Thêm thiết bị"
                    task={['Thiết bị', 'Danh sách thiết bị', '']}
                    contentMain="Danh sách thiết bị"
                  />
                  <TemplateFormAdd />
                </Template>
              ),
            },
            {
              path: 'detailRandom',
              children: [
                {
                  path: ':id',
                  element: (
                    <Template>
                      <HeaderInfo
                        title="Chi tiết"
                        task={['Thiết bị', 'Danh sách cấp số', '']}
                        contentMain="Quản lý Cấp số"
                      />
                      <TemplateFormDetail
                        classNameIcon={'bx bx-chevron-left-circle'}
                        tittlePath="Quay lại"
                        path={`/randomNumber`}
                        data={[
                          { display: 'Họ tên', key: 'nameCustomer' },
                          { display: 'Nguồn cấp', key: 'origin' },
                          { display: 'Tên dịch vụ', key: 'nameService' },
                          { display: 'Trạng thái', key: 'status' },
                          { display: 'Số thứ tự', key: 'id' },
                          { display: 'Số điện thoại', key: 'phone' },
                          { display: 'Thời gian cấp', key: 'fromDate' },
                          { display: 'Địa chỉ Email', key: 'email' },
                          { display: 'Hạn sử dụng', key: 'toDate' },
                        ]}
                        dataOrigin={Random.dataRandom}
                      />
                    </Template>
                  ),
                },
              ],
            },
            {
              path: 'update',
              children: [
                {
                  path: ':id',
                  element: (
                    <Template>
                      <HeaderInfo
                        title="Cập nhật thiết bị"
                        task={['Thiết bị', 'Danh sách thiết bị', '']}
                        contentMain="Quản lý thiết bị"
                      />
                      <TemplateFormAdd update />
                    </Template>
                  ),
                },
              ],
            },
            {
              path: 'detail',
              children: [
                {
                  path: ':id',
                  element: (
                    <Template>
                      <HeaderInfo
                        title="Chi tiết thiết bị"
                        task={['Thiết bị', 'Danh sách thiết bị', '']}
                        contentMain="Quản lý thiết bị"
                      />
                      <TemplateFormDetail
                        device
                        classNameIcon="bx bxs-pencil"
                        tittlePath="Cập nhật thiết bị"
                        path="/equipment/update"
                        data={[
                          { display: 'Mã thiết bị', key: 'id' },
                          { display: 'Loại thiết bị', key: 'typeDevice' },
                          { display: 'Tên thiết bị', key: 'name' },
                          { display: 'Tên đăng nhập', key: 'Account' },
                          { display: 'Địa chỉ IP', key: 'ipAddress' },
                          { display: 'Mật khẩu', key: 'passWord' },
                          { display: 'Dịch vụ sử dụng', key: 'service' },
                        ]}
                        dataOrigin={equipment.dataEquip}
                      />
                    </Template>
                  ),
                },
              ],
            },
            {
              path: '',
              element: (
                <Template>
                  <HeaderInfo
                    title="Danh sách thiết bị"
                    task={['Thiết bị', '']}
                    contentMain="Danh sách thiết bị"
                  />
                  <DeviceManager />
                </Template>
              ),
            },
          ],
        },
        {
          path: '/manage',
          children: [
            {
              path: 'role',

              children: [
                {
                  path: 'add',
                  element: (
                    <Template>
                      <HeaderInfo
                        title="Thêm vai trò"
                        task={['Cài đặt hệ thống', ' Quản lý vai trò', '']}
                        contentMain="Danh sách vai trò"
                      />
                      <FormRole />
                    </Template>
                  ),
                },
                {
                  path: 'update',
                  children: [
                    {
                      path: ':id',
                      element: (
                        <Template>
                          <HeaderInfo
                            title="Cập nhật vai trò"
                            task={['Cài đặt hệ thống', 'Quản lý vai trò', '']}
                            contentMain="Danh sách vai trò"
                          />
                          <FormRole update />
                        </Template>
                      ),
                    },
                  ],
                },
                {
                  path: '',
                  element: (
                    <Template>
                      <HeaderInfo
                        title="Quản lý vai trò"
                        task={['Cài đặt hệ thống', '']}
                        contentMain="Danh sách vai trò"
                      />
                      <RoleManager />
                    </Template>
                  ),
                },
              ],
            },
            {
              path: 'account',
              children: [
                {
                  path: 'add',
                  element: (
                    <Template>
                      <HeaderInfo
                        title="Quản lí tài khoản"
                        task={['Cài đặt hệ thống ', 'Quản lý tài khoản', '']}
                        contentMain="Quản lí tài khoản"
                      />
                      <AddAccount />
                    </Template>
                  ),
                },
                {
                  path: '',
                  element: (
                    <Template>
                      <HeaderInfo
                        title="Quản lý tài khoản"
                        task={['Cài đặt hệ thống', '']}
                        contentMain="Danh sách tài khoản"
                      />
                      <AccountManager />
                    </Template>
                  ),
                },
              ],
            },
            // { path: '', element: <Role /> },
            {
              path: 'user',

              children: [
                // { path: 'add', element: <FormRole /> },
                // {
                //   path: 'update',
                //   children: [
                //     {
                //       path: ':id',
                //       element: (
                //         <FormRole
                //           // pathCancel="/service"
                //           // pathSubmit="/service"
                //           update
                //         />
                //       ),
                //     },
                //   ],
                // },
                {
                  path: '',
                  element: (
                    <Template>
                      <HeaderInfo
                        title="Quản lý tài khoản"
                        task={['Cài đặt hệ thống ', '']}
                        contentMain="Danh sách tài khoản"
                      />
                      <UserManager />
                    </Template>
                  ),
                },
              ],
            },
          ],
        },
        // //service
        {
          path: '/service',
          children: [
            {
              path: 'add',
              element: (
                <Template>
                  <HeaderInfo
                    title="Thêm dịch vụ"
                    task={['Dịch vụ', 'Danh sách dịch vụ', '']}
                    contentMain="Quản lý dịch vụ"
                  />
                  <TemplateFormService
                    pathCancel="/service"
                    pathSubmit="/service"
                  />
                </Template>
              ),
            },
            {
              path: 'update',
              children: [
                {
                  path: ':id',
                  element: (
                    <Template>
                      <HeaderInfo
                        title="Cập nhật"
                        task={['Dịch vụ', 'Danh sách dịch vụ', '']}
                        contentMain="Quản lý dịch vụ"
                      />
                      <TemplateFormService
                        pathCancel="/service"
                        pathSubmit="/service"
                        update
                      />
                    </Template>
                  ),
                },
              ],
            },
            {
              path: 'detail',
              children: [
                {
                  path: ':id',
                  element: (
                    <Template>
                      <HeaderInfo
                        title="Chi tiết"
                        task={['Dịch vụ', 'Danh sách dịch vụ', '']}
                        contentMain="Quản lý dịch vụ"
                      />
                      <TemplateFormDetailService />
                    </Template>
                  ),
                },
              ],
            },
            {
              path: '',
              element: (
                <Template>
                  <HeaderInfo
                    title="Danh sách dịch vụ"
                    task={['Dịch vụ', '']}
                    contentMain="Quản lý dịch vụ"
                  />
                  <ServiceManager />
                </Template>
              ),
            },
          ],
        }, // //randomNumber
        {
          path: '/randomNumber',
          children: [
            {
              path: 'add',
              element: (
                <Template>
                  <HeaderInfo
                    title="Cấp số mới"
                    task={['Cấp số', 'Danh sách cấp số', '']}
                    contentMain="Quản lý cấp số"
                  />
                  <AddRandom />
                </Template>
              ),
            },
            {
              path: '',
              element: (
                <Template>
                  <HeaderInfo
                    title="Danh sách cấp số"
                    task={['Cấp số', '']}
                    contentMain="Quản lý cấp số"
                  />
                  <RandomManager />
                </Template>
              ),
            },
          ],
        },
        // ///announce
        {
          path: '/announce',
          element: (
            <Template>
              <HeaderInfo title="Lập báo cáo" task={['Báo cáo', '']} />
              <ReportManager />
            </Template>
          ),
        },
        {
          path: '*',
          element: '404 not found',
        },
      ],
    },
  ]);
  return routes;
};

export default Router;