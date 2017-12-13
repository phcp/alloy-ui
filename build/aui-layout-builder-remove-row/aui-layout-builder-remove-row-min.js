YUI.add("aui-layout-builder-remove-row",function(e,t){function s(){}var n=e.getClassName("layout","builder","remove","row","button"),r=".layout-row",i='<button class="btn btn-default btn-xs '+n+'" type="button">'+'<span class="glyphicon glyphicon-trash"></span></button>';s.prototype={initializer:function(){this._eventHandles.push(this.after("enableRemoveRowsChange",e.bind(this._afterEnableRemoveRowsChange,this)),this.after("layout:rowsChange",e.bind(this._afterRemoveRowRowsChange,this)),this.after("layoutChange",e.bind(this._afterRemoveRowLayoutChange,this)),this.after("layout:isColumnModeChange",e.bind(this._afterRemoveRowIsColumnModeChange,this))),this._uiSetEnableRemoveRows(this.get("enableRemoveRows"))},destructor:function(){this._unbindRemoveRowEvents()},_afterRemoveRowIsColumnModeChange:function(){this._uiSetEnableRemoveRows(this.get("enableRemoveRows"))},_afterRemoveRowLayoutChange:function(){this._uiSetEnableRemoveRows(this.get("enableRemoveRows"))},_afterRemoveRowRemovableChange:function(e){var t=e.target.get("node"),i=e.target,s;s=t.one("."+n),e.newVal?this._insertRemoveButtonBeforeRow(i,t.one(r)):s&&s.remove()},_afterRemoveRowRowsChange:function(){this._uiSetEnableRemoveRows(this.get("enableRemoveRows"))},_afterEnableRemoveRowsChange:function(){this._uiSetEnableRemoveRows(this.get("enableRemoveRows"))},_appendButtonToRows:function(){var e=this,t,n=this._layoutContainer.all(r);n.each(function(n){t=n.getData("layout-row"),t.get("removable")&&e._insertRemoveButtonBeforeRow(t,n)})},_bindRemoveRowEvents:function(){var t=this.get("container");this._removeRowsEventHandles=[t.delegate("click",e.bind(this._onMouseClickRemoveRowEvent,this),"."+n),this.after("layout-row:removableChange",this._afterRemoveRowRemovableChange)]},_insertRemoveButtonBeforeRow:function(t,n){var r;r=e.Node.create(i),r.setData("layout-row",t),this._layoutContainer.insertBefore(r,n)},_onMouseClickRemoveRowEvent:function(e){var t=e.currentTarget,n=t.getData("layout-row");this.get("clickRemoveRow")(n)&&this.get("layout").removeRow(n)},_removeRemoveButtonFromRows:function(){this.get("container").all("."+n).remove()},_uiSetEnableRemoveRows:function(e){this._removeRemoveButtonFromRows(),e&&this.get("layout").get("isColumnMode")?(this._appendButtonToRows(),this._bindRemoveRowEvents()):this._unbindRemoveRowEvents()},_unbindRemoveRowEvents:function(){this._removeRowsEventHandles&&(new e.EventHandle(this._removeRowsEventHandles)).detach()}},s.ATTRS={clickRemoveRow:{validator:e.Lang.isFunction,value:function(){return!0}},enableRemoveRows:{validator:e.Lang.isBoolean,value:!0}},e.LayoutBuilderRemoveRow=s},"3.1.0-deprecated.36",{requires:["aui-node-base","base-build"],skinnable:!0});
