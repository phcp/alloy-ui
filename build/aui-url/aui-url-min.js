YUI.add("aui-url",function(e,t){function y(e){var t=this;if(!e)throw"An URL should be specified.";t._indexParts(e),t._indexParameters()}var n=e.QueryString,r="://",i=0,s=1,o=2,u=3,a=4,f=5,l=6,c=7,h=8,p=9,d=10,v=11,m=12,g=13;y.URI_REGEX_RFC3986=new RegExp("^(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?(?:\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)"),e.mix(y.prototype,{_source:undefined,_protocol:undefined,_authority:undefined,_user_info:undefined,_user:undefined,_password:undefined,_host:undefined,_port:undefined,_relative:undefined,_path:undefined,_directory:undefined,_file:undefined,_query:undefined,_anchor:undefined,_parameters:undefined,addParameter:function(t,n){var r=this;r.setParameter(t,r.hasParameter(t)?e.Array(r.getParameter(t)).concat(n):n)},addParameters:function(t){var n=this;e.each(t,function(e,t){n.addParameter(t,e)})},hasParameter:function(e){var t=this;return t._parameters.hasOwnProperty(e)},getParameter:function(e){var t=this;return t._parameters[e]},getParameters:function(){var e=this;return e._parameters},getAnchor:function(){var e=this;return e._anchor},getAuthority:function(){var e=this;return e._authority},getDirectory:function(){var e=this;return e._directory},getFile:function(){var e=this;return e._file},getHost:function(){var e=this;return e._host},getPassword:function(){var e=this;return e._password},getPath:function(){var e=this;return e._path},getPort:function(){var e=this;return e._port},getProtocol:function(){var e=this;return e._protocol},getQuery:function(){var e=this;return e._query},getRelative:function(){var e=this;return e._relative},getSource:function(){var e=this;return e._source},getUser:function(){var e=this;return e._user},getUserInfo:function(){var e=this;return e._user_info},removeParameter:function(e){var t=this;delete t._parameters[e],t._indexParameters()},removeParameters:function(t){var n=this;e.each(t,function(e,t){n.removeParameter(t)})},setParameter:function(e,t){var n=this;n._parameters[e]=t,n._indexParameters()},setParameters:function(t){var n=this;e.each(t,function(e,t){n.setParameter(t,e)})},setAnchor:function(e){var t=this;t._anchor=e},setAuthority:function(e){var t=this;t._authority=e},setDirectory:function(e){var t=this;t._directory=e},setFile:function(e){var t=this;t._file=e},setHost:function(e){var t=this;t._host=e},setPassword:function(e){var t=this;t._password=e},setPath:function(e){var t=this;t._path=e},setPort:function(e){var t=this;t._port=e},setProtocol:function(e){var t=this;t._protocol=e},setRelative:function(e){var t=this;t._relative=e},setSource:function(e){var t=this;t._source=e},setUser:function(e){var t=this;t._user=e},setUserInfo:function(e){var t=this;t._user_info=e},toString:function(){var e=this,t=[];return e._protocol&&t.push(e._protocol,r),t.push(e._authority,e._path),e._query&&t.push("?",e._query),e._anchor&&t.push("#",e._anchor),t.join("")},_indexParameters:function(){var e=this;e._parameters||(e._parameters=n.parse(e._query||"")),e._query=n.stringify(e._parameters)},_indexParts:function(e){var t=this,n=y.URI_REGEX_RFC3986.exec(e);t._source=n[i],t._protocol=n[s],t._authority=n[o],t._user_info=n[u],t._user=n[a],t._password=n[f],t._host=n[l],t._port=n[c],t._relative=n[h],t._path=n[p],t._directory=n[d],t._file=n[v],t._query=n[m],t._anchor=n[g]}},!0),e.Url=y},"3.1.0-deprecated.36",{requires:["oop","querystring-parse","querystring-stringify"]});
