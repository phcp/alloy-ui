YUI.add("aui-timepicker-native",function(e,t){function r(){}var n=e.Lang;r.ATTRS={nativeMask:{validator:n.isString,value:"%H:%M"},nativeType:{validator:n.isString,value:"time"}},e.TimePickerNativeBase=r,e.TimePickerNative=e.Base.create("timepicker-native",e.Base,[e.DatePickerDelegate,e.DatePickerNativeBase,e.TimePickerNativeBase])},"3.1.0-deprecated.36",{requires:["base","base-build","aui-node-base","aui-datepicker-delegate","aui-datepicker-native"]});
