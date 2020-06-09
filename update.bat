@echo off
title newCmd

::%str:~0,5% 截取字符串
set batDir=%cd%
echo ==================batDir:%batDir%==================
::ssh  删除远程文件夹
set pwd=lunchao..
set host=root@lunc.club
set port=1103
set remotePath=/usr/share/nginx/dist
set projectPath=F:\vue\vue-comic
::scp  复制文件夹到远程服务器
set fileName=dist
set scpPath=/usr/share/nginx


(echo Set WshShell=WScript.CreateObject("WScript.Shell"^)
echo WshShell.AppActivate "newCmd"
echo WScript.Sleep 5000
echo WshShell.SendKeys "%pwd%{Enter}"
echo WScript.Sleep 3000
echo WshShell.SendKeys "%pwd%{Enter}"
echo WScript.Sleep 3000
echo WshShell.SendKeys "%pwd%{Enter}"
)>pw.vbs 

start pw.vbs 
::runas /noprofile /user:lunchao cmd >nul
echo ==================Deleting remote folder...==================
ssh -p %port% %host% rm -rf %remotePath%
echo ==================Copying to remote folder...==================
%projectPath:~0,2% &  cd %projectPath%  &  scp -r -P 1103 %fileName% %host%:%scpPath%
echo ==================successed==================


%batDir:~0,2%  & cd %batDir% 
del pw.vbs >nul
pause