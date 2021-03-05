//
// sqlserver 代码模板
//
// @params
// :encode  SHELL编码
// :conn    数据库连接字符串
// :sql     执行SQL语句
// :db      数据库名
// :table   表名

module.exports = (arg1, arg2, arg3, arg4, arg5, arg6) => ({
  show_databases: {
    _: 'yv66vgAAADIBOAoACQCJCQBhAIoJAGEAiwgAjAoABwCNCACOBwCPCgAHAJAHAJEKAJIAkwcAlAgAlQcAlgcAlwoACQCYCABiCgAHAJkKAJoAmwoAmgCcCABkCACdCQBhAJ4IAJ8JAGEAoAgAoQkAYQCiBwCjCACkCgAbAKUIAKYIAKcIAKgIAKkIAKoIAKsLAA0ArAsACwCtCwANAK0LAAsArgoAYQCvCQBhALAKAGEAsQoAGwCyBwCzCgAsAIkIALQKACwAtQoADgC2CgAsALYLAA0AtwoAGwC2CgBhALgKALkAugoAuwC8CgA5AL0KADkAvgcAvwoAYQDACgA5AMEKADkAwggAwwgAxAoAOQDFCgA5AMYKAMcAyAsAyQDKCwDLAMwLAM0AzgsAzwDQCwDPANELAM0A0gsAzQDTCADUCADVCgBhANYHANcIANgHANkJALsA2goAkgCbCgAHANsKALsA3AoABwDdCgDeAN8KAAkAtggA4AoA4QDiCADjCgA5AOQIAOUIAOYKAAcA5woABwDoCADpCADqCAB4BwDrAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEAEGRlY29kZXJDbGFzc2RhdGEBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQANU3RhY2tNYXBUYWJsZQcAlwcA6wcAkQcAlwcAowcAvwEABmRlY29kZQEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsHAOwHAO0HAO4HAO8HAPABAA1zaG93RGF0YWJhc2VzAQA4KExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAhhc291dHB1dAEAEkJhc2U2NERlY29kZVRvQnl0ZQEAFihMamF2YS9sYW5nL1N0cmluZzspW0IBAApTb3VyY2VGaWxlAQATU2hvd19kYXRhYmFzZXMuamF2YQwAawBsDABiAGMMAGQAZQEAHWphdmF4LnNlcnZsZXQuanNwLlBhZ2VDb250ZXh0DADxAPIBAApnZXRSZXF1ZXN0AQAPamF2YS9sYW5nL0NsYXNzDADzAPQBABBqYXZhL2xhbmcvT2JqZWN0BwD1DAD2APcBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQALZ2V0UmVzcG9uc2UBACZqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZQEAE2phdmEvbGFuZy9FeGNlcHRpb24MAPgA+QwA+gD7BwD8DAD9AP4MAP8BAAEAFGFudHN3b3JkcmFuZG9tUHJlZml4DABpAGcBAAZiYXNlNjQMAGYAZwEAD2FudHN3b3JkQ2hhcnNldAwAaABnAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAAwAawEBAQADLT58AQADfDwtAQARYW50c3dvcmRhcmdlbmNvZGUBAA9hbnRzd29yZGFyZ2Nvbm4BABJhbnRzd29yZGFyZ2RlY29kZXIBAAl0ZXh0L2h0bWwMAQIBAQwBAwEBDAEEAHkMAHgAeQwAagBnDACCAIMMAQUBBgEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAJRVJST1I6Ly8gDAEFAQcMAQgBCQwBCgELDACEAHkHAQwMAQ0BAQcBDgwBDwEQDAERARIMAG8AcAEAEGphdmEvbGFuZy9TdHJpbmcMAIUAhgwAawETDAEUAQkBAAINCgEAAQoMARUBFgwBFwEYBwEZDAEaARsHAO0MARwBHQcA7gwBHgEfBwDvDAEgASEHAPAMASIBIwwBJAESDAElASYMAScBEgEANXNlbGVjdCBbbmFtZV0gZnJvbSBtYXN0ZXIuZGJvLnN5c2RhdGFiYXNlcyBvcmRlciBieSAxAQABCQwAewB8AQAVamF2YS9sYW5nL0NsYXNzTG9hZGVyAQALZGVmaW5lQ2xhc3MBAAJbQgwBKAEpDAEqASsMASwBLQwBLgEvBwEwDAExATIBAAxqYXZhLnZlcnNpb24HATMMATQAeQEAAzEuOQwBNQEQAQAWc3VuLm1pc2MuQkFTRTY0RGVjb2RlcgEADGRlY29kZUJ1ZmZlcgwBNgD0DAExATcBABBqYXZhLnV0aWwuQmFzZTY0AQAKZ2V0RGVjb2RlcgEAIWRhdGFiYXNlL3NxbHNlcnZlci9TaG93X2RhdGFiYXNlcwEAE1tMamF2YS9sYW5nL1N0cmluZzsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQASamF2YS9zcWwvU3RhdGVtZW50AQASamF2YS9zcWwvUmVzdWx0U2V0AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAEWdldERlY2xhcmVkTWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAEGdldERlY2xhcmVkRmllbGQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZDsBABdqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZAEADXNldEFjY2Vzc2libGUBAAQoWilWAQADZ2V0AQAmKExqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAJZ2V0V3JpdGVyAQAXKClMamF2YS9pby9QcmludFdyaXRlcjsBABNqYXZhL2lvL1ByaW50V3JpdGVyAQAFcHJpbnQBABFqYXZhL2xhbmcvSW50ZWdlcgEACHBhcnNlSW50AQAVKExqYXZhL2xhbmcvU3RyaW5nOylJAQAJc3Vic3RyaW5nAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBAAR0cmltAQAHcmVwbGFjZQEARChMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTtMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTspTGphdmEvbGFuZy9TdHJpbmc7AQAFc3BsaXQBACcoTGphdmEvbGFuZy9TdHJpbmc7KVtMamF2YS9sYW5nL1N0cmluZzsBABZqYXZhL3NxbC9Ecml2ZXJNYW5hZ2VyAQANZ2V0Q29ubmVjdGlvbgEAKShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL0Nvbm5lY3Rpb247AQAPY3JlYXRlU3RhdGVtZW50AQAWKClMamF2YS9zcWwvU3RhdGVtZW50OwEADGV4ZWN1dGVRdWVyeQEAKChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL1Jlc3VsdFNldDsBAAtnZXRNZXRhRGF0YQEAHigpTGphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhOwEADmdldENvbHVtbkNvdW50AQADKClJAQANZ2V0Q29sdW1uTmFtZQEABG5leHQBAAMoKVoBAAlnZXRTdHJpbmcBAARUWVBFAQARTGphdmEvbGFuZy9DbGFzczsBAA5nZXRDbGFzc0xvYWRlcgEAGSgpTGphdmEvbGFuZy9DbGFzc0xvYWRlcjsBAAd2YWx1ZU9mAQAWKEkpTGphdmEvbGFuZy9JbnRlZ2VyOwEADmdldENvbnN0cnVjdG9yAQAzKFtMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvQ29uc3RydWN0b3I7AQAdamF2YS9sYW5nL3JlZmxl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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}'
  },
  show_tables: {
    _: 'yv66vgAAADIBOgoACQCKCQBiAIsJAGIAjAgAjQoABwCOCACPBwCQCgAHAJEHAJIKAJMAlAcAlQgAlgcAlwcAmAoACQCZCABjCgAHAJoKAJsAnAoAmwCdCABlCACeCQBiAJ8IAKAJAGIAoQgAogkAYgCjBwCkCAClCgAbAKYIAKcIAKgIAKkIAKoIAKsIAKwIAK0LAA0ArgsACwCvCwANAK8LAAsAsAoAYgCxCQBiALIKAGIAswoAGwC0BwC1CgAtAIoIALYKAC0AtwoADgC4CgAtALgLAA0AuQoAGwC4CgBiALoKALsAvAoAvQC+CgA6AL8KADoAwAcAwQoAYgDCCgA6AMMKADoAxAgAxQgAxgoAOgDHCgA6AMgKAMkAygsAywDMCwDNAM4LAM8A0AsA0QDSCwDRANMLAM8A1AsAzwDVCADWCADXCgBiANgHANkIANoHANsJAL0A3AoAkwCcCgAHAN0KAL0A3goABwDfCgDgAOEKAAkAuAgA4goA4wDkCADlCgA6AOYIAOcIAOgKAAcA6QoABwDqCADrCADsCAB5BwDtAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEAEGRlY29kZXJDbGFzc2RhdGEBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQANU3RhY2tNYXBUYWJsZQcAmAcA7QcAkgcAmAcApAcAwQEABmRlY29kZQEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsHAO4HAO8HAPAHAPEHAPIBAApzaG93VGFibGVzAQBKKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAhhc291dHB1dAEAEkJhc2U2NERlY29kZVRvQnl0ZQEAFihMamF2YS9sYW5nL1N0cmluZzspW0IBAApTb3VyY2VGaWxlAQAQU2hvd190YWJsZXMuamF2YQwAbABtDABjAGQMAGUAZgEAHWphdmF4LnNlcnZsZXQuanNwLlBhZ2VDb250ZXh0DADzAPQBAApnZXRSZXF1ZXN0AQAPamF2YS9sYW5nL0NsYXNzDAD1APYBABBqYXZhL2xhbmcvT2JqZWN0BwD3DAD4APkBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQALZ2V0UmVzcG9uc2UBACZqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZQEAE2phdmEvbGFuZy9FeGNlcHRpb24MAPoA+wwA/AD9BwD+DAD/AQAMAQEBAgEAFGFudHN3b3JkcmFuZG9tUHJlZml4DABqAGgBAAZiYXNlNjQMAGcAaAEAD2FudHN3b3JkQ2hhcnNldAwAaQBoAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAAwAbAEDAQADLT58AQADfDwtAQARYW50c3dvcmRhcmdlbmNvZGUBAA9hbnRzd29yZGFyZ2Nvbm4BAA1hbnRzd29yZGFyZ2RiAQASYW50c3dvcmRhcmdkZWNvZGVyAQAJdGV4dC9odG1sDAEEAQMMAQUBAwwBBgB6DAB5AHoMAGsAaAwAgwCEDAEHAQgBABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEACUVSUk9SOi8vIAwBBwEJDAEKAQsMAQwBDQwAhQB6BwEODAEPAQMHARAMAREBEgwBEwEUDABwAHEBABBqYXZhL2xhbmcvU3RyaW5nDACGAIcMAGwBFQwBFgELAQACDQoBAAEKDAEXARgMARkBGgcBGwwBHAEdBwDvDAEeAR8HAPAMASABIQcA8QwBIgEjBwDyDAEkASUMASYBFAwBJwEoDAEpARQBADhTRUxFQ1QgW25hbWVdIEZST00gc3lzb2JqZWN0cyBXSEVSRSB4dHlwZT0nVScgT1JERVIgQlkgMQEAAQkMAHwAfQEAFWphdmEvbGFuZy9DbGFzc0xvYWRlcgEAC2RlZmluZUNsYXNzAQACW0IMASoBKwwBLAEtDAEuAS8MATABMQcBMgwBMwE0AQAMamF2YS52ZXJzaW9uBwE1DAE2AHoBAAMxLjkMATcBEgEAFnN1bi5taXNjLkJBU0U2NERlY29kZXIBAAxkZWNvZGVCdWZmZXIMATgA9gwBMwE5AQAQamF2YS51dGlsLkJhc2U2NAEACmdldERlY29kZXIBAB5kYXRhYmFzZS9zcWxzZXJ2ZXIvU2hvd190YWJsZXMBABNbTGphdmEvbGFuZy9TdHJpbmc7AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAEmphdmEvc3FsL1N0YXRlbWVudAEAEmphdmEvc3FsL1Jlc3VsdFNldAEAGmphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhAQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBABFnZXREZWNsYXJlZE1ldGhvZAEAQChMamF2YS9sYW5nL1N0cmluZztbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZDsBABhqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2QBAAZpbnZva2UBADkoTGphdmEvbGFuZy9PYmplY3Q7W0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBABBnZXREZWNsYXJlZEZpZWxkAQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL3JlZmxlY3QvRmllbGQ7AQAXamF2YS9sYW5nL3JlZmxlY3QvRmllbGQBAA1zZXRBY2Nlc3NpYmxlAQAEKFopVgEAA2dldAEAJihMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAVKExqYXZhL2xhbmcvU3RyaW5nOylWAQAOc2V0Q29udGVudFR5cGUBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEABmFwcGVuZAEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEACWdldFdyaXRlcgEAFygpTGphdmEvaW8vUHJpbnRXcml0ZXI7AQATamF2YS9pby9QcmludFdyaXRlcgEABXByaW50AQARamF2YS9sYW5nL0ludGVnZXIBAAhwYXJzZUludAEAFShMamF2YS9sYW5nL1N0cmluZzspSQEACXN1YnN0cmluZwEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEAFyhbQkxqYXZhL2xhbmcvU3RyaW5nOylWAQAEdHJpbQEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAWamF2YS9zcWwvRHJpdmVyTWFuYWdlcgEADWdldENvbm5lY3Rpb24BACkoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9Db25uZWN0aW9uOwEAD2NyZWF0ZVN0YXRlbWVudAEAFigpTGphdmEvc3FsL1N0YXRlbWVudDsBAAxleGVjdXRlUXVlcnkBACgoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9SZXN1bHRTZXQ7AQALZ2V0TWV0YURhdGEBAB4oKUxqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YTsBAA5nZXRDb2x1bW5Db3VudAEAAygpSQEADWdldENvbHVtbk5hbWUBAARuZXh0AQADKClaAQAJZ2V0U3RyaW5nAQAEVFlQRQEAEUxqYXZhL2xhbmcvQ2xhc3M7AQAOZ2V0Q2xhc3NMb2FkZXIBABkoKUxqYXZhL2xhbmcvQ2xhc3NMb2FkZXI7AQAHdmFsdWVPZgEAFihJKUxqYXZhL2xhbmcvSW50ZWdlcjsBAA5nZXRDb25zdHJ1Y3RvcgEAMyhbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::db}'
  },
  show_columns: {
    _: 'yv66vgAAADIBPgoACQCMCQBkAI0JAGQAjggAjwoABwCQCACRBwCSCgAHAJMHAJQKAJUAlgcAlwgAmAcAmQcAmgoACQCbCABlCgAHAJwKAJ0AngoAnQCfCABnCACgCQBkAKEIAKIJAGQAowgApAkAZAClBwCmCACnCgAbAKgIAKkIAKoIAKsIAKwIAK0IAK4IAK8IALALAA0AsQsACwCyCwANALILAAsAswoAZAC0CQBkALUKAGQAtgoAGwC3BwC4CgAuAIwIALkKAC4AugoADgC7CgAuALsLAA0AvAoAGwC7CgBkAL0KAL4AvwoAwADBCgA7AMIKADsAwwcAxAoAZADFCgA7AMYKADsAxwgAyAgAyQoAOwDKCgA7AMsKAMwAzQsAzgDPCwDQANELANIA0wsA1ADVCwDUANYLANIA1wsA0gDYCADZCADaCADbCgBkANwHAN0IAN4HAN8JAMAA4AoAlQCeCgAHAOEKAMAA4goABwDjCgDkAOUKAAkAuwgA5goA5wDoCADpCgA7AOoIAOsIAOwKAAcA7QoABwDuCADvCADwCAB7BwDxAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEAEGRlY29kZXJDbGFzc2RhdGEBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQANU3RhY2tNYXBUYWJsZQcAmgcA8QcAlAcAmgcApgcAxAEABmRlY29kZQEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsHAPIHAPMHAPQHAPUHAPYBAAtzaG93Q29sdW1ucwEAXChMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAIYXNvdXRwdXQBABJCYXNlNjREZWNvZGVUb0J5dGUBABYoTGphdmEvbGFuZy9TdHJpbmc7KVtCAQAKU291cmNlRmlsZQEAEVNob3dfY29sdW1ucy5qYXZhDABuAG8MAGUAZgwAZwBoAQAdamF2YXguc2VydmxldC5qc3AuUGFnZUNvbnRleHQMAPcA+AEACmdldFJlcXVlc3QBAA9qYXZhL2xhbmcvQ2xhc3MMAPkA+gEAEGphdmEvbGFuZy9PYmplY3QHAPsMAPwA/QEAJWphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlcXVlc3QBAAtnZXRSZXNwb25zZQEAJmphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlAQATamF2YS9sYW5nL0V4Y2VwdGlvbgwA/gD/DAEAAQEHAQIMAQMBBAwBBQEGAQAUYW50c3dvcmRyYW5kb21QcmVmaXgMAGwAagEABmJhc2U2NAwAaQBqAQAPYW50c3dvcmRDaGFyc2V0DABrAGoBABZqYXZhL2xhbmcvU3RyaW5nQnVmZmVyAQAADABuAQcBAAMtPnwBAAN8PC0BABFhbnRzd29yZGFyZ2VuY29kZQEAD2FudHN3b3JkYXJnY29ubgEADWFudHN3b3JkYXJnZGIBABBhbnRzd29yZGFyZ3RhYmxlAQASYW50c3dvcmRhcmdkZWNvZGVyAQAJdGV4dC9odG1sDAEIAQcMAQkBBwwBCgB8DAB7AHwMAG0AagwAhQCGDAELAQwBABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEACUVSUk9SOi8vIAwBCwENDAEOAQ8MARABEQwAhwB8BwESDAETAQcHARQMARUBFgwBFwEYDAByAHMBABBqYXZhL2xhbmcvU3RyaW5nDACIAIkMAG4BGQwBGgEPAQACDQoBAAEKDAEbARwMAR0BHgcBHwwBIAEhBwDzDAEiASMHAPQMASQBJQcA9QwBJgEnBwD2DAEoASkMASoBGAwBKwEsDAEtARgBAAEJAQAUU0VMRUNUIFRPUCAxICogRlJPTSABAAEuDAB+AH8BABVqYXZhL2xhbmcvQ2xhc3NMb2FkZXIBAAtkZWZpbmVDbGFzcwEAAltCDAEuAS8MATABMQwBMgEzDAE0ATUHATYMATcBOAEADGphdmEudmVyc2lvbgcBOQwBOgB8AQADMS45DAE7ARYBABZzdW4ubWlzYy5CQVNFNjREZWNvZGVyAQAMZGVjb2RlQnVmZmVyDAE8APoMATcBPQEAEGphdmEudXRpbC5CYXNlNjQBAApnZXREZWNvZGVyAQAfZGF0YWJhc2Uvc3Fsc2VydmVyL1Nob3dfY29sdW1ucwEAE1tMamF2YS9sYW5nL1N0cmluZzsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQASamF2YS9zcWwvU3RhdGVtZW50AQASamF2YS9zcWwvUmVzdWx0U2V0AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAEWdldERlY2xhcmVkTWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAEGdldERlY2xhcmVkRmllbGQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZDsBABdqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZAEADXNldEFjY2Vzc2libGUBAAQoWilWAQADZ2V0AQAmKExqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAJZ2V0V3JpdGVyAQAXKClMamF2YS9pby9QcmludFdyaXRlcjsBABNqYXZhL2lvL1ByaW50V3JpdGVyAQAFcHJpbnQBABFqYXZhL2xhbmcvSW50ZWdlcgEACHBhcnNlSW50AQAVKExqYXZhL2xhbmcvU3RyaW5nOylJAQAJc3Vic3RyaW5nAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBAAR0cmltAQAHcmVwbGFjZQEARChMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTtMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTspTGphdmEvbGFuZy9TdHJpbmc7AQAFc3BsaXQBACcoTGphdmEvbGFuZy9TdHJpbmc7KVtMamF2YS9sYW5nL1N0cmluZzsBABZqYXZhL3NxbC9Ecml2ZXJNYW5hZ2VyAQANZ2V0Q29ubmVjdGlvbgEAKShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL0Nvbm5lY3Rpb247AQAPY3JlYXRlU3RhdGVtZW50AQAWKClMamF2YS9zcWwvU3RhdGVtZW50OwEADGV4ZWN1dGVRdWVyeQEAKChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL1Jlc3VsdFNldDsBAAtnZXRNZXRhRGF0YQEAHigpTGphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhOwEADmdldENvbHVtbkNvdW50AQADKClJAQANZ2V0Q29sdW1uTmFtZQEABG5leHQBAAMoKVoBAAlnZXRTdHJpbmcBAARUWVBFAQARTGphdmEvbGFuZy9DbGFzczsBAA5nZXRDbGFzc0xvYWRlcgEAGSgpTGphdmEvbGFuZy9DbGFzc0xvYWRlcjsBAAd2YWx1ZU9mAQAWKEkpTGphdmEvbGFuZy9JbnRlZ2VyOwEADmdldENvbnN0cnVjdG9yAQAzKFtMamF2YS9sYW5nL0NsYXNzOylMamF2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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::db}',
    [arg4]: '#{newbase64::table}'
  },
  query: {
    _: 'yv66vgAAADIBUAoACQCTCQBqAJQJAGoAlQgAlgoABwCXCACYBwCZCgAHAJoHAJsKAJwAnQcAnggAnwcAoAcAoQoACQCiCABrCgAHAKMKAKQApQoApACmCABtCACnCQBqAKgIAKkJAGoAqggAqwkAagCsBwCtCACuCgAbAK8IALAIALEIALIIALMIALQIALUIALYLAA0AtwsACwC4CwANALgLAAsAuQoAagC6CQBqALsKAGoAvAoAGwC9BwC+CgAtAJMIAL8KAC0AwAoADgDBCgAtAMELAA0AwgoAGwDBCgBqAMMKAMQAxQoAxgDHCgA6AMgKADoAyQcAygoAagDLCgA6AMwIAM0KAM4AzwgA0AoAOgDRCADSCADTCgAHANQIANUHANYKADoA1wgA2AoABwDZCgDaANsIANwIAN0KADoA3goAOgDfCADgCADhCgA6AOIKADoA4woA5ADlCwDmAOcLAOgA6QsA6gDrCwDsAO0LAOwA7gsA6gDvCwDqAPAKAGoA8QgA8goAagDzBwD0CAD1CQDGAPYKAJwApQoABwD3CgDGAPgKAAcA+QoACQDBCAD6CAD7CgAHAPwIAP0IAIEHAP4BAAdyZXF1ZXN0AQAnTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlcXVlc3Q7AQAIcmVzcG9uc2UBAChMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2U7AQAHZW5jb2RlcgEAEkxqYXZhL2xhbmcvU3RyaW5nOwEAAmNzAQAMcmFuZG9tUHJlZml4AQAQZGVjb2RlckNsYXNzZGF0YQEABjxpbml0PgEAAygpVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBAAZlcXVhbHMBABUoTGphdmEvbGFuZy9PYmplY3Q7KVoBAA1TdGFja01hcFRhYmxlBwChBwD+BwCbBwChBwCtBwDKAQAGZGVjb2RlAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAMQmFzZTY0RW5jb2RlAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwcA/wcBAAcBAQcBAgcBAwEABXF1ZXJ5AQBKKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAhhc291dHB1dAEAEkJhc2U2NERlY29kZVRvQnl0ZQEAFihMamF2YS9sYW5nL1N0cmluZzspW0IBAApTb3VyY2VGaWxlAQAKUXVlcnkuamF2YQwAdAB1DABrAGwMAG0AbgEAHWphdmF4LnNlcnZsZXQuanNwLlBhZ2VDb250ZXh0DAEEAQUBAApnZXRSZXF1ZXN0AQAPamF2YS9sYW5nL0NsYXNzDAEGAQcBABBqYXZhL2xhbmcvT2JqZWN0BwEIDAEJAQoBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQALZ2V0UmVzcG9uc2UBACZqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZQEAE2phdmEvbGFuZy9FeGNlcHRpb24MAQsBDAwBDQEOBwEPDAEQAREMARIBEwEAFGFudHN3b3JkcmFuZG9tUHJlZml4DAByAHABAAZiYXNlNjQMAG8AcAEAD2FudHN3b3JkQ2hhcnNldAwAcQBwAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAAwAdAEUAQADLT58AQADfDwtAQARYW50c3dvcmRhcmdlbmNvZGUBAA9hbnRzd29yZGFyZ2Nvbm4BAA5hbnRzd29yZGFyZ3NxbAEAEmFudHN3b3JkYXJnZGVjb2RlcgEACXRleHQvaHRtbAwBFQEUDAEWARQMARcAggwAgQCCDABzAHAMAIwAjQwBGAEZAQAXamF2YS9sYW5nL1N0cmluZ0J1aWxkZXIBAAlFUlJPUjovLyAMARgBGgwBGwEcDAEdAR4MAI4AggcBHwwBIAEUBwEhDAEiASMMASQBJQwAeAB5AQAQamF2YS9sYW5nL1N0cmluZwwAjwCQDAB0ASYBAAxqYXZhLnZlcnNpb24HAScMASgAggEAAzEuOQwBKQEjAQAQamF2YS51dGlsLkJhc2U2NAEACmdldEVuY29kZXIMASoBBwEADmVuY29kZVRvU3RyaW5nAQACW0IMASsBLAEAFnN1bi5taXNjLkJBU0U2NEVuY29kZXIMAS0BLgcBLwwBMAExAQAGZW5jb2RlAQADDXwKDAEyATMMATQBHAEAAg0KAQABCgwBNQE2DAE3ATgHATkMAToBOwcBAAwBPAE9BwEBDAE+AT8HAQIMAUABQQcBAwwBQgFDDAFEASUMAUUBRgwBRwElDACEAIIBAAMJfAkMAIUAhgEAFWphdmEvbGFuZy9DbGFzc0xvYWRlcgEAC2RlZmluZUNsYXNzDAFIAUkMAUoBSwwBTAFNDAFOAS4BABZzdW4ubWlzYy5CQVNFNjREZWNvZGVyAQAMZGVjb2RlQnVmZmVyDAEwAU8BAApnZXREZWNvZGVyAQAYZGF0YWJhc2Uvc3Fsc2VydmVyL1F1ZXJ5AQATW0xqYXZhL2xhbmcvU3RyaW5nOwEAE2phdmEvc3FsL0Nvbm5lY3Rpb24BABJqYXZhL3NxbC9TdGF0ZW1lbnQBABJqYXZhL3NxbC9SZXN1bHRTZXQBABpqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YQEAB2Zvck5hbWUBACUoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvQ2xhc3M7AQARZ2V0RGVjbGFyZWRNZXRob2QBAEAoTGphdmEvbGFuZy9TdHJpbmc7W0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2Q7AQAYamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kAQAGaW52b2tlAQA5KExqYXZhL2xhbmcvT2JqZWN0O1tMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAIZ2V0Q2xhc3MBABMoKUxqYXZhL2xhbmcvQ2xhc3M7AQAQZ2V0RGVjbGFyZWRGaWVsZAEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9yZWZsZWN0L0ZpZWxkOwEAF2phdmEvbGFuZy9yZWZsZWN0L0ZpZWxkAQANc2V0QWNjZXNzaWJsZQEABChaKVYBAANnZXQBACYoTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEAFShMamF2YS9sYW5nL1N0cmluZzspVgEADnNldENvbnRlbnRUeXBlAQAUc2V0Q2hhcmFjdGVyRW5jb2RpbmcBAAxnZXRQYXJhbWV0ZXIBAAZhcHBlbmQBACwoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVmZmVyOwEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWlsZGVyOwEACHRvU3RyaW5nAQAUKClMamF2YS9sYW5nL1N0cmluZzsBAAlnZXRXcml0ZXIBABcoKUxqYXZhL2lvL1ByaW50V3JpdGVyOwEAE2phdmEvaW8vUHJpbnRXcml0ZXIBAAVwcmludAEAEWphdmEvbGFuZy9JbnRlZ2VyAQAIcGFyc2VJbnQBABUoTGphdmEvbGFuZy9TdHJpbmc7KUkBAAlzdWJzdHJpbmcBABUoSSlMamF2YS9sYW5nL1N0cmluZzsBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEAEGphdmEvbGFuZy9TeXN0ZW0BAAtnZXRQcm9wZXJ0eQEACWNvbXBhcmVUbwEACWdldE1ldGhvZAEACGdldEJ5dGVzAQAEKClbQgEAFmdldERlY2xhcmVkQ29uc3RydWN0b3IBADMoW0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcjsBAB1qYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcgEAC25ld0luc3RhbmNlAQAnKFtMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAKcmVwbGFjZUFsbAEAOChMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAEdHJpbQEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAWamF2YS9zcWwvRHJpdmVyTWFuYWdlcgEADWdldENvbm5lY3Rpb24BACkoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9Db25uZWN0aW9u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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::sql}'
  }
})