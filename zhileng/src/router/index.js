import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ForgetPass from '@/components/ForgetPass'
import ForgetWarn from '@/components/ForgetWarn'
import CodeNumber from '@/components/CodeNumber'
import FWarnRecover from '@/components/FWarnRecover'
import NoEquipment from '@/components/NoEquipment'
import AddEquipment from '@/components/AddEquipment'
import EquipmentManage from '@/components/EquipmentManage'
import DeletePop from '@/components/DeletePop'
import ModelChoose from '@/components/ModelChoose'
import PassPop from '@/components/PassPop'
import ModelOne from '@/components/ModelOne'
import MODouble from '@/components/MODouble'
import MONoEquipment from '@/components/MONoEquipment'
import MOPassPop from '@/components/MOPassPop'
import ModelTwo from '@/components/ModelTwo'
import MTPassPop from '@/components/MTPassPop'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgetpass',
      name: 'ForgetPass',
      component: ForgetPass
    },
    {
      path: '/forgetwarn',
      name: 'ForgetWarn',
      component: ForgetWarn
    },
    {
      path: '/codenumber',
      name: 'CodeNumber',
      component: CodeNumber
    },
    {
      path: '/fwarnRecover',
      name: 'FWarnRecover',
      component: FWarnRecover
    },
    {
      path: '/noequipment',
      name: 'NoEquipment',
      component: NoEquipment
    },
    {
      path: '/addEquipment',
      name: 'AddEquipment',
      component: AddEquipment
    },
    {
      path: '/equipmentmanage',
      name: 'EquipmentManage',
      component: EquipmentManage
    },
    {
      path: '/deletepop',
      name: 'DeletePop',
      component: DeletePop
    },
    {
      path: '/modelchoose',
      name: 'ModelChoose',
      component: ModelChoose
    },
    {
      path: '/passpop',
      name: 'PassPop',
      component: PassPop
    },
    {
      path: '/modelone',
      name: 'ModelOne',
      component: ModelOne
    },
    {
      path: '/modouble',
      name: 'MODouble',
      component: MODouble
    },
    {
      path: '/monoequipment',
      name: 'MONoEquipment',
      component: MONoEquipment
    },
    {
      path: '/mopasspop',
      name: 'MOPassPop',
      component: MOPassPop
    },
    {
      path: '/modeltwo',
      name: 'ModelTwo',
      component: ModelTwo
    },
    {
      path: '/mtpasspop',
      name: 'MTPassPop',
      component: MTPassPop
    },
  ]
})
