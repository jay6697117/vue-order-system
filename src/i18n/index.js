/**
 * Created by Administrator on 2017/6/15.
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'EN': {
    message: {
      'home': 'HOME',
      'service': 'SERVICE',
      'order': 'ORDER',
      'user': 'USER',
      'des': 'Fwone,  founded in 2001, provides IT infrastructure and helpdesk outsourcing service for 400+ multinational companies with full time technicians in 60+ cities of Asia.',
      'title': 'Let Fwone’s IT service be available to its customers at any given time or place through using responsibility, technique, process and standards, thus guarantee the stability and sustained growth of customers’ business.',
      'Unprocessed': 'Unprocessed',
      'Processing': 'Processing',
      'Processed': 'Processed',
      'To_rate': 'To rate',
      'Rate': 'To rate',
      'Awaiting_payment': 'Awaiting payment',
      'Completed': 'Completed',
      'Delayed': 'Delayed',
      'Cancelled': 'Cancelled',
      'All_orders': 'All orders',
      'Service_definition': 'Service definition',
      'MA_des': 'Residency IT service, engineer to station in client office on a fixed schedule with or without any occurrence',
      'Oncall_des': 'Service on demand to rectify and resolve customer\'s issue upon request , Engineer leave upon completion of request',
      'Appointment_time': 'Appointment Time',
      'Go': 'Go',
      'Service_introduction': 'Service introduction',
      'Timely_assistance': 'Timely Assistance',
      'Residency_service': 'Residency Service',
      'Account_name': 'Account Name',
      'Account_password': 'Account password',
      'Login': 'Login',
      'Logout': 'Logout',
      'Back': 'Back',
      'Address': 'Address',
      'Payment': 'Payment',
      'Reminder': 'Reminder',
      'complaint': 'Complaint',
      'Notifications': 'Notifications',
      'Message': 'Message',
      'Personal_information': 'Personal information',
      'On_site': 'On site',
      'Telephone': 'Telephone',
      'Remote_desktop': 'Remote desktop',
      'Detail': 'Detail',
      'Cancel': 'Cancel',
      'Ok': 'Ok',
      'NO': 'No.',
      'Pull_to_refresh': 'Pull to refresh',
      'No_more_data': 'No more data',
      'Add': 'Add',
      'Save': 'Save',
      'Company': 'Company',
      'Area': 'Area',
      'Street': 'Street',
      'Detailed_address': 'Detailed address',
      'Delete': 'Delete',
      'Last_months': 'Last months',
      'This_months': 'This months',
      'Last_3_months': 'Last 3 months',
      'Last_6_months': 'Last 6 months',
      'Last_year': 'Last year',
      'This_year': 'This year',
      'No_time_limit': 'No time limit',
      'Service_location': 'service location',
      'User': 'User',
      'Other': 'Other',
      'Report_by_me': 'Report by me',
      'Display_MA': 'Display Scheduled Maintenance Work Orders',
      'Display_on_call': 'Display On-Call Work Orders',
      'Done': 'Done',
      'Reset': 'Reset',
      'Reset_success': 'Reset success',
      'Pay_success': 'Pay success',
      'My_complains': 'My Complains',
      'Complainant': 'Complainant',
      'Complains_details': 'Complains details',
      'Create_time': 'Create time',
      'Cause_complaint': 'Cause of complaint',
      'Response_not_timely': 'Response is not timely',
      'Engineer_issues': 'Engineer unable to resolve issues',
      'Engineer': 'Engineer',
      'Engineers_frequently': 'Engineers change too frequently',
      'Attitude_issues': 'Attitude issues',
      'Complaints': 'Complaints',
      'Complaints_department': 'Complaints department',
      'Service_center': 'Service center',
      'Result': 'Result',
      'Complaint_wait': 'Your complaint is being processed... Please wait a moment...',
      'Received_by': 'Received by',
      'Reply': 'reply',
      'Process_time': 'process time',
      'Service_level': 'Service Satisfaction level',
      'Very_satisfied': 'Very satisfied',
      'Satisfied': 'satisfied',
      'Ordinary': 'ordinary',
      'Not_satisfied': 'Not satisfied',
      'Very_dissatisfied': 'Very dissatisfied',
      'Please_score': 'Please score',
      'Processing_result': 'Processing result',
      'Rating': 'Rating',
      'Rating_processing_result': 'Please score on this processing result',
      'Call_reminder': 'Call reminder',
      'Requestor': 'Requestor',
      'Order_status': 'Order status',
      'Accept': 'accept',
      'Depart': 'depart',
      'Arrive': 'arrive',
      'Leave': 'leave',
      'Sign': 'sign',
      'Confirm_price': 'confirm price',
      'Invoice': 'invoice',
      'Without_the_invoice': 'Without the invoice',
      'Regular_invoice': 'regular invoice',
      'Value-added_invoice': 'Value-added invoice',
      'invoice_information_incomplete': 'The invoice information is incomplete, please add',
      'Complete': 'complete',
      'Service_detail': 'Service detail',
      'Duration': 'Duration',
      'Fault_description': 'Fault description',
      'Solving_steps': 'Solving steps',
      'Engineer_information': 'Engineer information',
      'Name': 'Name',
      'Postion': 'Postion',
      'Service_years': 'Service years',
      'No_found': 'No available data was found',
      'Self_evaluation': 'Self-evaluation',
      'Skills': 'Skills',
      'Language': 'Language',
      'Choose_location': 'Please choose service location...',
      'Location_list': 'Location list',
      'Range_date': 'Date Range ',
      'Range_time': 'Time Range ',
      'Start_date': 'Start date',
      'Start_time': 'Start time',
      'End_time': 'End time',
      'End_date': 'End date',
      'By_today': 'By Today',
      'Before_Tomorrow': 'Before Tomorrow',
      'Within_Week': 'Within This Week',
      'Before_week': 'Before Next week',
      'Can_time_list': 'The engineer can come to the door of the time list',
      'Please_describe': 'Please describe the fault...',
      'Price_curve': 'price curve',
      'In_service': 'Your request has been included in the service.If other expenses are incurred, the group will communicate with you, thank you for choosing group thinking and wish you a happy work!',
      'Confirm': 'Confirm',
      'Del_success': 'Success',
      'Mon': 'Mo.',
      'Tues': 'Tu.',
      'Wed': 'We.',
      'Thur': 'Th.',
      'Fri': 'Fr.',
      'Sat': 'Sa.',
      'Sun': 'Su.',
      'Today': 'Today',
      'Sure_delete': 'Delete?',
      'Save_successful': 'Save successful',
      'Overall': 'Overall',
      'Unvalued': 'unvalued',
      'Rate_placeholder': 'Is it good service?（More than 15 characters）',
      'Publish_tip': 'Come on! You can publish it by {Num} characters.',
      'Publish': 'Publish',
      'Complaints_suggestions': 'Complaints and suggestions',
      'Submit': 'Submit',
      'Pay': 'Pay',
      'Complaints_successfully': 'Complaints_successfully',
      'Report_time': 'Report time',
      'Working_day': 'Working Day Only',
      'Include_weekend': 'Include the weekend',
      'Lunch_break': 'Lunch break ',
      'Engineer_Headcount': 'Engineer Headcount',
      'Cost_Estimation': 'Cost Estimation',
      'Checkout_success': 'Checkout success',
      'Network_disconnect': 'Network_disconnect...',
      'Submit_orders': 'Submit orders',
      'Subtotal': 'Subtotal',
      'Total': 'Total',
      'Modes_of_Payment': 'Modes of Payment',
      'Alipay': 'Alipay',
      'WeChat_Pay': 'WeChat Pay',
      'UnionPay': 'UnionPay',
      'Company_name': 'company name',
      'taxpayer_registration_number': 'taxpayer\'s registration number',
      'bank_of_deposit': 'bank of deposit',
      'credit_card_numbers': 'credit card numbers',
      'company_tel': 'company tel',
      'company_address': 'company address',
      'Bill-to_address': 'Bill-to address',
      'Account_Management': 'Account Management',
      'Switchable_account': 'Switchable account',
      'No_switch_account': 'No switch account',
      'signup': 'signup',
      'signup_email': 'Register Email',
      'signup_phone': 'Register mobile phone',
      'Email': 'email',
      'Phone_number': 'cell-phone number',
      'Msg_code': 'message code',
      'click': 'send',
      'resend': 'resend',
      'password': 'password',
      'repeat_password': 'repeat password',

      'Already_exists': 'already exists',
      'Incorrect_format': 'incorrect format',
      'Required_fields': 'required fields',
      'Password': 'password',
      'Check_password': 'Re-enter password',
      'Entered_differ': 'Entered passwords differ',
      'Please_input': 'please input',
      'Auth_code': 'message authentication code',
      'UseItem': 'Click',
      'Wrong_captcha': 'Verification code error',
      'Wrong_Verification': 'Verification code expiration',
      'Success': 'Success',
      'Send_email_des': 'Information has been sent to %{msg},please check and timely activate',
      'Personage': 'personage',
      'Msg_send': 'The text message has been sent, please check',
      'Validation_fails': 'Form validation fails',
      'Company_name_help': 'The name of the business license or enterprise registration certificate issued by the local government shall be exactly the same',
      'Mark': 'Mark',
      'Mark_help': 'The Mark is the company\'s English abbreviation',
      'Company_id_num': 'business license registration number',
      'Company_id_num_help': 'Please enter 15 business license number or 18 unified social credit code',
      'AdminName': 'AdminName',
      'Admin_id_num': 'The administrator id number',
      'Admin_phone_num': 'The administrator phone number',
      'Gender': 'Gender',
      'Male': 'Male',
      'Female': 'Female',
      'Letter_only': 'Support letter only',
      'Resend': 'resend',
      'Minimum_6': 'Minimum 6 Characters No Spaces',
      'cell-phone_help': 'The mobile phone number can be used as a login account',
      'FwonePay': 'FwonePay',
      'Coupon':'Coupon'
    }
  },
  'CN': {
    message: {
      'home': '主页',
      'service': '预约',
      'order': '订单',
      'user': '我的',
      'des': '群思科技，成立于2001年，为400多个跨国公司在亚洲的60多个城市提供专业技术工程师、IT基础设施和Helpdesk外包服务。',
      'title': '致力于成为世界级领先的专业IT服务企业  用责任心、技术、流程和规范，使用户任何时间、任何地点都能及时得到群思专业服务 向顾客提供富有传奇色彩的顾客服务、永不止境地投入到提升顾客满意的努力中去',
      'Unprocessed': '待处理',
      'Processing': '处理中',
      'Processed': '已受理',
      'To_rate': '待评价',
      'Rate': '评价',
      'Awaiting_payment': '待付款',
      'Completed': '已完成',
      'Delayed': '已过期',
      'Cancelled': '已取消',
      'All_orders': '全部工单',
      'Service_definition': '服务定义',
      'MA_des': '根据客户定义上下班时间，无论是否有问题发生均在现场待命。',
      'Oncall_des': '根据客户期望的时间段，为客户解决某问题，解决完毕后离开',
      'Appointment_time': '上门时间',
      'Go': '前往',
      'Service_introduction': '服务介绍',
      'Timely_assistance': '及时雨',
      'Residency_service': '候鸟',
      'Account_name': '账号名',
      'Account_password': '密码',
      'Login': '登录',
      'Logout': '退出',
      'Back': '返回',
      'Address': '服务点',
      'Payment': '付款',
      'Reminder': '催单',
      'complaint': '投诉',
      'Notifications': '通知',
      'Message': '消息',
      'Personal_information': '个人信息',
      'On_site': '现场支持',
      'Telephone': '电话协助',
      'Remote_desktop': '远程连接',
      'Detail': '详情',
      'Cancel': '取消',
      'Ok': '确定',
      'NO': '编号',
      'Pull_to_refresh': '下拉刷新',
      'No_more_data': '没有更多数据',
      'Add': '新增',
      'Save': '保存',
      'Company': '公司',
      'Area': '所在地区',
      'Street': '街道',
      'Detailed_address': '详细地址',
      'Delete': '删除',
      'Last_months': '上月',
      'This_months': '本月',
      'Last_3_months': '近3个月',
      'Last_6_months': '近6个月',
      'Last_year': '去年',
      'This_year': '今年',
      'No_time_limit': '时间不限',
      'Service_location': '服务点',
      'User': '用户',
      'Other': '其他',
      'Report_by_me': '显示我的报修',
      'Display_MA': '显示驻场工单',
      'Display_on_call': '显示现场工单',
      'Done': '完成',
      'Reset': '重置',
      'Reset_success': '重置成功',
      'Pay_success': '支付成功',
      'My_complains': '我的投诉',
      'Order_status': '工单状态',
      'Complainant': '投诉人',
      'Complains_details': '投诉内容',
      'Create_time': '创建时间',
      'Cause_complaint': '投诉主体',
      'Response_not_timely': '响应不及时',
      'Engineer_issues': '工程师解决能力低',
      'Engineer': '工程师',
      'Engineers_frequently': '工程师更换频繁',
      'Attitude_issues': '工程师态度问题',
      'Complaints': '投诉信息',
      'Complaints_department': '投诉部门',
      'Service_center': '服务台',
      'Result': '处理结果',
      'Complaint_wait': '您的投诉正在受理中...请稍等...',
      'Received_by': '受理人',
      'Reply': '处理回复',
      'Process_time': '处理时间',
      'Service_level': '服务评价',
      'Very_satisfied': '非常满意',
      'Satisfied': '满意',
      'Ordinary': '一般',
      'Not_satisfied': '不满意',
      'Very_dissatisfied': '非常不满意',
      'Please_score': '请评价',
      'Processing_result': '处理结果',
      'Rating': '评论',
      'Rating_processing_result': '请您对本次处理结果进行评价',
      'Call_reminder': '我的催单',
      'Requestor': '报修人',
      'Accept': '接受',
      'Depart': '出发',
      'Arrive': '到达',
      'Leave': '离开',
      'Sign': '客户签字',
      'Confirm_price': '价格确认',
      'Invoice': '发票',
      'Without_the_invoice': '无需发票',
      'Regular_invoice': '普票',
      'Value-added_invoice': '增票',
      'invoice_information_incomplete': '发票信息不全，请补充',
      'Complete': '完成',
      'Service_detail': '服务明细',
      'Duration': '起止时间',
      'Fault_description': '故障描述',
      'Solving_steps': '处理过程',
      'Engineer_information': '工程师名片',
      'Name': '姓名',
      'Postion': '岗位',
      'Service_years': '服务年限',
      'No_found': '暂无介绍...',
      'Self_evaluation': '自我评价',
      'Skills': '技能',
      'Language': '语言能力',
      'Choose_location': '请选择服务点...',
      'Location_list': '服务点列表',
      'Range_date': '时间',
      'Range_time': '时间范围',
      'Start_date': '开始日期',
      'Start_time': '开始时间',
      'End_time': '结束时间',
      'End_date': '结束日期',
      'By_today': '今天内',
      'Before_Tomorrow': '明天前',
      'Within_Week': '本周内',
      'Before_week': '下周前',
      'Can_time_list': '工程师可上门的时间列表',
      'Please_describe': '请描述故障...',
      'Price_curve': '价格曲线',
      'In_service': '您本次的请求已包含在【包月/包年】服务中。如产生其他的费用，群思服务台会和您进行沟通，感谢您选择群思，祝您工作愉快！',
      'Confirm': '确定下单',
      'Del_success': '删除成功',
      'Mon': '周一',
      'Tues': '周二',
      'Wed': '周三',
      'Thur': '周四',
      'Fri': '周五',
      'Sat': '周六',
      'Sun': '周日',
      'Today': '今天',
      'Sure_delete': '确定删除？',
      'Save_successful': '保存成功',
      'Overall': '总   体',
      'Unvalued': '未评价',
      'Rate_placeholder': '服务周到吗？（写够15字才是好同志）',
      'Publish_tip': '加油！还差{Num}字就可以发布了。',
      'Publish': '发布',
      'Complaints_suggestions': '投诉与建议',
      'Submit': '提交',
      'Pay': '支付',
      'Complaints_successfully': '投诉成功',
      'Report_time': '报修时间',
      'Working_day': '限工作日',
      'Include_weekend': '是否周末',
      'Lunch_break': '是否午休',
      'Engineer_Headcount': '工程师数量',
      'Cost_Estimation': '计算价格',
      'Checkout_success': '下单成功',
      'Network_disconnect': '网络断开连接...',
      'Submit_orders': '提交订单',
      'Subtotal': '小计',
      'Total': '合计',
      'Modes_of_Payment': '支付方式',
      'Alipay': '支付宝',
      'WeChat_Pay': '微信支付',
      'UnionPay': '银联支付',
      'Company_name': '公司名称',
      'taxpayer_registration_number': '纳税人识别号',
      'bank_of_deposit': '开户银行',
      'credit_card_numbers': '银行卡号',
      'company_tel': '公司电话',
      'company_address': '公司地址',
      'Bill-to_address': '收票地址',
      'Account_Management': '账号管理',
      'Switchable_account': '可切换账号',
      'No_switch_account': '无可切换账号',
      'signup': '注册',
      'signup_email': '邮箱注册',
      'signup_phone': '手机注册',
      'Email': '邮箱',
      'Phone_number': '手机号',
      'Msg_code': '短信验证码',
      'click': '点击获取',
      'resend': '重新发送',
      'password': '密码',
      'repeat_password': '重复密码',

      'Already_exists': '已存在',
      'Incorrect_format': '格式不正确',
      'Required_fields': '必填项',
      'Password': '密码',
      'Check_password': '确认密码',
      'Entered_differ': '密码不一致',
      'Please_input': '请输入',
      'Auth_code': '短信验证码',
      'UseItem': '点击获取',
      'Wrong_captcha': '验证码错误',
      'Wrong_Verification': '验证码过期',
      'Success': '成功',
      'Send_email_des': '邮件已发送至 %{msg},请及时查收并激活',
      'Personage': '个人',
      'Msg_send': '短信已发出，请查收',
      'Validation_fails': '表单验证失败',
      'Company_name_help': '需与当地政府颁发的商业许可证或企业注册证上的企业名称完全一致',
      'Mark': '标识',
      'Mark_help': '标识即为公司英文简称',
      'Company_id_num': '营业执照注册号',
      'Company_id_num_help': '请输入15位营业执照号或18位的统一社会信用代码',
      'AdminName': '管理员姓名',
      'Admin_id_num': '管理员身份证号',
      'Admin_phone_num': '管理员手机号',
      'Gender': '性别',
      'Male': '男',
      'Female': '女',
      'Letter_only': '只支持字母',
      'Resend': '重新发送',
      'Minimum_6': '至少6位',
      'cell-phone_help': '绑定手机号可作为登录账号',
      'FwonePay': '预付款支付',
      'Coupon':'优惠券'
    }
  },
  'TN':{
    message:{
      'home': '主页',
      'service': '预约',
      'order': '订单',
      'user': '我的',
      'des': '群思科技，成立于2001年，为400多个跨国公司在亚洲的60多个城市提供专业技术工程师、IT基础设施和Helpdesk外包服务。',
      'title': '致力于成为世界级领先的专业IT服务企业  用责任心、技术、流程和规范，使用户任何时间、任何地点都能及时得到群思专业服务 向顾客提供富有传奇色彩的顾客服务、永不止境地投入到提升顾客满意的努力中去',
      'Unprocessed': '待处理',
      'Processing': '处理中',
      'Processed': '已受理',
      'To_rate': '待评价',
      'Rate': '评价',
      'Awaiting_payment': '待付款',
      'Completed': '已完成',
      'Delayed': '已过期',
      'Cancelled': '已取消',
      'All_orders': '全部工单',
      'Service_definition': '服务定义',
      'MA_des': '根据客户定义上下班时间，无论是否有问题发生均在现场待命。',
      'Oncall_des': '根据客户期望的时间段，为客户解决某问题，解决完毕后离开',
      'Appointment_time': '上门时间',
      'Go': '前往',
      'Service_introduction': '服务介绍',
      'Timely_assistance': '及时雨',
      'Residency_service': '候鸟',
      'Account_name': '账号名',
      'Account_password': '密码',
      'Login': '登录',
      'Logout': '退出',
      'Back': '返回',
      'Address': '服务点',
      'Payment': '付款',
      'Reminder': '催单',
      'complaint': '投诉',
      'Notifications': '通知',
      'Message': '消息',
      'Personal_information': '个人信息',
      'On_site': '现场支持',
      'Telephone': '电话协助',
      'Remote_desktop': '远程连接',
      'Detail': '详情',
      'Cancel': '取消',
      'Ok': '确定',
      'NO': '编号',
      'Pull_to_refresh': '下拉刷新',
      'No_more_data': '没有更多数据',
      'Add': '新增',
      'Save': '保存',
      'Company': '公司',
      'Area': '所在地区',
      'Street': '街道',
      'Detailed_address': '详细地址',
      'Delete': '删除',
      'Last_months': '上月',
      'This_months': '本月',
      'Last_3_months': '近3个月',
      'Last_6_months': '近6个月',
      'Last_year': '去年',
      'This_year': '今年',
      'No_time_limit': '时间不限',
      'Service_location': '服务点',
      'User': '用户',
      'Other': '其他',
      'Report_by_me': '显示我的报修',
      'Display_MA': '显示驻场工单',
      'Display_on_call': '显示现场工单',
      'Done': '完成',
      'Reset': '重置',
      'Reset_success': '重置成功',
      'Pay_success': '支付成功',
      'My_complains': '我的投诉',
      'Order_status': '工单状态',
      'Complainant': '投诉人',
      'Complains_details': '投诉内容',
      'Create_time': '创建时间',
      'Cause_complaint': '投诉主体',
      'Response_not_timely': '响应不及时',
      'Engineer_issues': '工程师解决能力低',
      'Engineer': '工程师',
      'Engineers_frequently': '工程师更换频繁',
      'Attitude_issues': '工程师态度问题',
      'Complaints': '投诉信息',
      'Complaints_department': '投诉部门',
      'Service_center': '服务台',
      'Result': '处理结果',
      'Complaint_wait': '您的投诉正在受理中...请稍等...',
      'Received_by': '受理人',
      'Reply': '处理回复',
      'Process_time': '处理时间',
      'Service_level': '服务评价',
      'Very_satisfied': '非常满意',
      'Satisfied': '满意',
      'Ordinary': '一般',
      'Not_satisfied': '不满意',
      'Very_dissatisfied': '非常不满意',
      'Please_score': '请评价',
      'Processing_result': '处理结果',
      'Rating': '评论',
      'Rating_processing_result': '请您对本次处理结果进行评价',
      'Call_reminder': '我的催单',
      'Requestor': '报修人',
      'Accept': '接受',
      'Depart': '出发',
      'Arrive': '到达',
      'Leave': '离开',
      'Sign': '客户签字',
      'Confirm_price': '价格确认',
      'Invoice': '发票',
      'Without_the_invoice': '无需发票',
      'Regular_invoice': '普票',
      'Value-added_invoice': '增票',
      'invoice_information_incomplete': '发票信息不全，请补充',
      'Complete': '完成',
      'Service_detail': '服务明细',
      'Duration': '起止时间',
      'Fault_description': '故障描述',
      'Solving_steps': '处理过程',
      'Engineer_information': '工程师名片',
      'Name': '姓名',
      'Postion': '岗位',
      'Service_years': '服务年限',
      'No_found': '暂无介绍...',
      'Self_evaluation': '自我评价',
      'Skills': '技能',
      'Language': '语言能力',
      'Choose_location': '请选择服务点...',
      'Location_list': '服务点列表',
      'Range_date': '时间',
      'Range_time': '时间范围',
      'Start_date': '开始日期',
      'Start_time': '开始时间',
      'End_time': '结束时间',
      'End_date': '结束日期',
      'By_today': '今天内',
      'Before_Tomorrow': '明天前',
      'Within_Week': '本周内',
      'Before_week': '下周前',
      'Can_time_list': '工程师可上门的时间列表',
      'Please_describe': '请描述故障...',
      'Price_curve': '价格曲线',
      'In_service': '您本次的请求已包含在【包月/包年】服务中。如产生其他的费用，群思服务台会和您进行沟通，感谢您选择群思，祝您工作愉快！',
      'Confirm': '确定下单',
      'Del_success': '删除成功',
      'Mon': '周一',
      'Tues': '周二',
      'Wed': '周三',
      'Thur': '周四',
      'Fri': '周五',
      'Sat': '周六',
      'Sun': '周日',
      'Today': '今天',
      'Sure_delete': '确定删除？',
      'Save_successful': '保存成功',
      'Overall': '总   体',
      'Unvalued': '未评价',
      'Rate_placeholder': '服务周到吗？（写够15字才是好同志）',
      'Publish_tip': '加油！还差{Num}字就可以发布了。',
      'Publish': '发布',
      'Complaints_suggestions': '投诉与建议',
      'Submit': '提交',
      'Pay': '支付',
      'Complaints_successfully': '投诉成功',
      'Report_time': '报修时间',
      'Working_day': '限工作日',
      'Include_weekend': '是否周末',
      'Lunch_break': '是否午休',
      'Engineer_Headcount': '工程师数量',
      'Cost_Estimation': '计算价格',
      'Checkout_success': '下单成功',
      'Network_disconnect': '网络断开连接...',
      'Submit_orders': '提交订单',
      'Subtotal': '小计',
      'Total': '合计',
      'Modes_of_Payment': '支付方式',
      'Alipay': '支付宝',
      'WeChat_Pay': '微信支付',
      'UnionPay': '银联支付',
      'Company_name': '公司名称',
      'taxpayer_registration_number': '纳税人识别号',
      'bank_of_deposit': '开户银行',
      'credit_card_numbers': '银行卡号',
      'company_tel': '公司电话',
      'company_address': '公司地址',
      'Bill-to_address': '收票地址',
      'Account_Management': '账号管理',
      'Switchable_account': '可切换账号',
      'No_switch_account': '无可切换账号',
      'signup': '注册',
      'signup_email': '邮箱注册',
      'signup_phone': '手机注册',
      'Email': '邮箱',
      'Phone_number': '手机号',
      'Msg_code': '短信验证码',
      'click': '点击获取',
      'resend': '重新发送',
      'password': '密码',
      'repeat_password': '重复密码',

      'Already_exists': '已存在',
      'Incorrect_format': '格式不正确',
      'Required_fields': '必填项',
      'Password': '密码',
      'Check_password': '确认密码',
      'Entered_differ': '密码不一致',
      'Please_input': '请输入',
      'Auth_code': '短信验证码',
      'UseItem': '点击获取',
      'Wrong_captcha': '验证码错误',
      'Wrong_Verification': '验证码过期',
      'Success': '成功',
      'Send_email_des': '邮件已发送至 %{msg},请及时查收并激活',
      'Personage': '个人',
      'Msg_send': '短信已发出，请查收',
      'Validation_fails': '表单验证失败',
      'Company_name_help': '需与当地政府颁发的商业许可证或企业注册证上的企业名称完全一致',
      'Mark': '标识',
      'Mark_help': '标识即为公司英文简称',
      'Company_id_num': '营业执照注册号',
      'Company_id_num_help': '请输入15位营业执照号或18位的统一社会信用代码',
      'AdminName': '管理员姓名',
      'Admin_id_num': '管理员身份证号',
      'Admin_phone_num': '管理员手机号',
      'Gender': '性别',
      'Male': '男',
      'Female': '女',
      'Letter_only': '只支持字母',
      'Resend': '重新发送',
      'Minimum_6': '至少6位',
      'cell-phone_help': '绑定手机号可作为登录账号',
      'FwonePay': '预付款支付',
      'Coupon':'优惠券'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'CN', // set locale
  messages, // set locale messages
})

export default i18n
