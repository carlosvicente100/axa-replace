import React from "react";
import "./styles.css";

const Personal = () => {
  return <div class="st">

<h2>Informe de Diagnósticos de eficiencia energética</h2>

<table>
  <tr>
    <td class="detail-name">Nombre de equipo</td>

    <td>W1002855</td>
  </tr>

  <tr>
    <td class="detail-name">Hora del examen</td>

    <td>2022-07-28T10:24:07Z</td>
  </tr>

  <tr>
    <td class="detail-name">Duración del examen</td>

    <td>60 segundos</td>
  </tr>

  <tr>
    <td class="detail-name">Fabricante del sistema</td>

    <td>Dell Inc.</td>
  </tr>

  <tr>
    <td class="detail-name">Nombre de producto del sistema</td>

    <td>Latitude 5410</td>
  </tr>

  <tr>
    <td class="detail-name">Fecha de BIOS</td>

    <td>09/23/2020</td>
  </tr>

  <tr>
    <td class="detail-name">Versión del BIOS</td>

    <td>1.3.2</td>
  </tr>

  <tr>
    <td class="detail-name">Compilación del sistema operativo</td>

    <td>19042</td>
  </tr>

  <tr>
    <td class="detail-name">Rol de plataforma</td>

    <td>PlatformRoleMobile</td>
  </tr>

  <tr>
    <td class="detail-name">Con corriente alterna</td>

    <td>true</td>
  </tr>

  <tr>
    <td class="detail-name">Número de procesos</td>

    <td>355</td>
  </tr>

  <tr>
    <td class="detail-name">Número de subprocesos</td>

    <td>6085</td>
  </tr>

  <tr>
    <td class="detail-name">GUID de informe</td>

    <td>"cc09fd12-b8c2-4607-8cd3-88bca8ec4b8a"</td>
  </tr>
</table>

<h3>Resultados del análisis</h3>

<h4>Errores</h4>

<div class="log-entry">
  <div class="error-log-entry">
    <div class="log-entry-header">
      Directiva de energía:Tiempo de espera de suspensión deshabilitado (con batería)
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        El equipo no está configurado para entrar en suspensión automáticamente tras un período
        de inactividad.
      </div>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="error-log-entry">
    <div class="log-entry-header">
      Directiva de energía:Tiempo de espera de suspensión deshabilitado (con corriente alterna)
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        El equipo no está configurado para entrar en suspensión automáticamente tras un período
        de inactividad.
      </div>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="error-log-entry">
    <div class="log-entry-header">
      Solicitudes de disponibilidad del sistema:Solicitud necesaria para la pantalla
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        El programa ha enviado una solicitud para impedir que la pantalla entre en un modo de
        bajo consumo automáticamente.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Proceso solicitante</span></td>

          <td>
            \Device\HarddiskVolume3\Program Files (x86)\Google\Chrome\Application\chrome.exe
          </td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="error-log-entry">
    <div class="log-entry-header">Uso de CPU:Uso alto del procesador</div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        El uso medio del procesador durante el seguimiento era alto. El sistema consumirá menos
        cuando el uso medio del procesador sea muy bajo. Revise el uso del procesador de los
        procesos individuales para determinar qué aplicaciones y servicios contribuyen en mayor
        medida al uso total del procesador.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>37.35</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<h4>Advertencias</h4>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Resolución de temporizador de plataforma:Solicitud de temporizador pendiente
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Un programa o servicio solicitó una resolución de temporizador inferior a la resolución
        de temporizador máxima de la plataforma.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Período solicitado</span></td>

          <td>10000</td>
        </tr>

        <tr>
          <td><span class="detail-name">Identificador de proceso solicitante</span></td>

          <td>16512</td>
        </tr>

        <tr>
          <td><span class="detail-name">Ruta de proceso solicitante</span></td>

          <td>
            \Device\HarddiskVolume3\Program Files (x86)\Google\Chrome\Application\chrome.exe
          </td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Resolución de temporizador de plataforma:Solicitud de temporizador pendiente
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Un programa o servicio solicitó una resolución de temporizador inferior a la resolución
        de temporizador máxima de la plataforma.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Período solicitado</span></td>

          <td>10000</td>
        </tr>

        <tr>
          <td><span class="detail-name">Identificador de proceso solicitante</span></td>

          <td>22680</td>
        </tr>

        <tr>
          <td><span class="detail-name">Ruta de proceso solicitante</span></td>

          <td>
            \Device\HarddiskVolume3\Program Files (x86)\Google\Chrome\Application\chrome.exe
          </td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Resolución de temporizador de plataforma:Solicitud de temporizador pendiente
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Un programa o servicio solicitó una resolución de temporizador inferior a la resolución
        de temporizador máxima de la plataforma.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Período solicitado</span></td>

          <td>10000</td>
        </tr>

        <tr>
          <td><span class="detail-name">Identificador de proceso solicitante</span></td>

          <td>22380</td>
        </tr>

        <tr>
          <td><span class="detail-name">Ruta de proceso solicitante</span></td>

          <td>
            \Device\HarddiskVolume3\Program Files\Docker\Docker\resources\com.docker.backend.exe
          </td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Resolución de temporizador de plataforma:Solicitud de temporizador pendiente
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Un programa o servicio solicitó una resolución de temporizador inferior a la resolución
        de temporizador máxima de la plataforma.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Período solicitado</span></td>

          <td>10000</td>
        </tr>

        <tr>
          <td><span class="detail-name">Identificador de proceso solicitante</span></td>

          <td>20716</td>
        </tr>

        <tr>
          <td><span class="detail-name">Ruta de proceso solicitante</span></td>

          <td>
            \Device\HarddiskVolume3\Program Files\Docker\Docker\resources\vpnkit-bridge.exe
          </td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Directiva de energía:Tiempo de espera de pantalla largo (con batería)
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        La pantalla está configurada para apagarse tras más de 5 minutos.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Tiempo de espera (segundos)</span></td>

          <td>14400</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Directiva de energía:Tiempo de espera de pantalla largo (con corriente alterna)
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        La pantalla está configurada para apagarse tras más de 10 minutos.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Tiempo de espera (segundos)</span></td>

          <td>18000</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>powershell.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>37664</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.86</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clrjit.dll
          </td>

          <td>0.69</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.40</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clr.dll</td>

          <td>0.35</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>powershell.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>13064</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.86</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clrjit.dll
          </td>

          <td>0.73</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.39</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clr.dll</td>

          <td>0.35</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>powershell.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>29228</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.79</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clrjit.dll
          </td>

          <td>0.68</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.39</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clr.dll</td>

          <td>0.33</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>powershell.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>33704</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.74</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clrjit.dll
          </td>

          <td>0.63</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.39</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clr.dll</td>

          <td>0.31</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>powershell.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>36876</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.68</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clrjit.dll
          </td>

          <td>0.63</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.37</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clr.dll</td>

          <td>0.30</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>powershell.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>9060</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.63</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clrjit.dll
          </td>

          <td>0.60</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.37</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clr.dll</td>

          <td>0.28</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>powershell.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>14664</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.63</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clrjit.dll
          </td>

          <td>0.62</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.35</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clr.dll</td>

          <td>0.30</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>powershell.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>23324</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.57</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clrjit.dll
          </td>

          <td>0.57</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.34</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clr.dll</td>

          <td>0.28</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>powershell.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>15968</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.54</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clrjit.dll
          </td>

          <td>0.56</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.35</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clr.dll</td>

          <td>0.27</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>powershell.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>5800</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.48</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clrjit.dll
          </td>

          <td>0.55</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.32</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clr.dll</td>

          <td>0.27</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>powershell.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>26268</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.41</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clrjit.dll
          </td>

          <td>0.52</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.31</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clr.dll</td>

          <td>0.26</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>System</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>4</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.24</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.90</td>
        </tr>

        <tr>
          <td>
            \SystemRoot\System32\DriverStore\FileRepository\iigd_dch.inf_amd64_ac19d7e120d74fdf\igdkmd64.sys
          </td>

          <td>0.05</td>
        </tr>

        <tr>
          <td>
            \SystemRoot\System32\DriverStore\FileRepository\ialpss2_i2c_cnl.inf_amd64_666eecf21665eb26\iaLPSS2_I2C_CNL.sys
          </td>

          <td>0.03</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>mcshield.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>7472</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.22</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Program Files\Common
            Files\McAfee\Engine\scanners\x86_64\avengine\6500.9779\mscan64a.dat
          </td>

          <td>0.47</td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Program Files\Common Files\McAfee\AVSolution\lua_lib.dll
          </td>

          <td>0.23</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>

          <td>0.23</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>svchost.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>3676</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.19</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.59</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\drivers\mfeaack.sys</td>

          <td>0.37</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>

          <td>0.07</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>minionhost.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>10016</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.14</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.37</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Program Files\Cybereason ActiveProbe\CoreMinion.dll</td>

          <td>0.19</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>

          <td>0.19</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>fcag.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>14620</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.12</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Program Files\McAfee\DLP\Agent\fcag.exe</td>

          <td>0.63</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.24</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>

          <td>0.15</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>powershell.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>33904</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.06</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clrjit.dll
          </td>

          <td>0.48</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\Microsoft.NET\Framework64\v4.0.30319\clr.dll</td>

          <td>0.26</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.16</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>chrome.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>16512</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>1.02</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Program Files
            (x86)\Google\Chrome\Application\103.0.5060.114\chrome.dll
          </td>

          <td>0.78</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.09</td>
        </tr>

        <tr>
          <td></td>

          <td>0.05</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>chrome.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>29148</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>0.81</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Program Files
            (x86)\Google\Chrome\Application\103.0.5060.114\chrome.dll
          </td>

          <td>0.34</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.17</td>
        </tr>

        <tr>
          <td>\SystemRoot\System32\win32kbase.sys</td>

          <td>0.09</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>chrome.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>22680</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>0.80</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Program Files
            (x86)\Google\Chrome\Application\103.0.5060.114\chrome.dll
          </td>

          <td>0.34</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.11</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>

          <td>0.08</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>sqlservr.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>6744</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>0.73</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Program Files\Microsoft SQL
            Server\MSSQL15.SQLEXPRESS\MSSQL\Binn\sqldk.dll
          </td>

          <td>0.30</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.26</td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Program Files\Microsoft SQL
            Server\MSSQL15.SQLEXPRESS\MSSQL\Binn\sqlmin.dll
          </td>

          <td>0.04</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>dwm.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>2372</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>0.67</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\dwmcore.dll</td>

          <td>0.23</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.11</td>
        </tr>

        <tr>
          <td>\SystemRoot\System32\win32kbase.sys</td>

          <td>0.07</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>ShellExperienceHost.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>17864</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>0.45</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.17</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\drivers\mfeaack.sys</td>

          <td>0.07</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>

          <td>0.06</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>chrome.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>14852</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>0.37</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Program Files
            (x86)\Google\Chrome\Application\103.0.5060.114\chrome.dll
          </td>

          <td>0.29</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.04</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>

          <td>0.01</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>services.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>1848</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>0.33</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.16</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\drivers\mfeaack.sys</td>

          <td>0.04</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>

          <td>0.04</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>mfefw.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>8900</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>0.27</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.22</td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Program Files\McAfee\Endpoint
            Security\Firewall\FirewallBLObject.dll
          </td>

          <td>0.01</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\drivers\mfehidk.sys</td>

          <td>0.00</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>Teams.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>20904</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>0.25</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Users\alan.algamis.externo\AppData\Local\Microsoft\Teams\current\Teams.exe
          </td>

          <td>0.17</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>

          <td>0.04</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.03</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>mfeatp.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>8556</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>0.22</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>

          <td>0.04</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\sechost.dll</td>

          <td>0.04</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.03</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>chrome.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>35232</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>0.22</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Program Files
            (x86)\Google\Chrome\Application\103.0.5060.114\chrome.dll
          </td>

          <td>0.18</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.02</td>
        </tr>

        <tr>
          <td></td>

          <td>0.01</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>edpa.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>6252</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>0.21</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.12</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>

          <td>0.01</td>
        </tr>

        <tr>
          <td>\SystemRoot\System32\drivers\FLTMGR.SYS</td>

          <td>0.01</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="warning-log-entry">
    <div class="log-entry-header">
      Uso de CPU:Proceso individual con uso significativo del procesador.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Este proceso es responsable de una parte significativa del uso total del procesador
        registrado durante el seguimiento.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Nombre del proceso</span></td>

          <td>chrome.exe</td>
        </tr>

        <tr>
          <td><span class="detail-name">PID</span></td>

          <td>6764</td>
        </tr>

        <tr>
          <td><span class="detail-name">Uso medio (%)</span></td>

          <td>0.21</td>
        </tr>

        <tr>
          <td><span class="detail-name"> Módulo </span></td>

          <td><span class="detail-name"> Uso medio del módulo (%) </span></td>
        </tr>

        <tr>
          <td>
            \Device\HarddiskVolume3\Program Files
            (x86)\Google\Chrome\Application\103.0.5060.114\chrome.dll
          </td>

          <td>0.09</td>
        </tr>

        <tr>
          <td>\SystemRoot\system32\ntoskrnl.exe</td>

          <td>0.05</td>
        </tr>

        <tr>
          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>

          <td>0.01</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<h4>Información</h4>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Resolución de temporizador de plataforma:Resolución de temporizador de plataforma
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        La resolución de temporizador de plataforma predeterminada es 15,6 ms (15625000 ns) y se
        debe usar siempre que el sistema esté inactivo. Si se aumenta la resolución de
        temporizador, puede que las tecnologías de administración de energía del procesador no
        sean efectivas. Puede que la resolución de temporizador se aumente a causa de
        animaciones gráficas o reproducción multimedia.
      </div>

      <table>
        <tr>
          <td>
            <span class="detail-name"
              >Resolución de temporizador actual (unidades de 100 ns)</span
            >
          </td>

          <td>156250</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Resolución de temporizador de plataforma:Pila de solicitudes del temporizador
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Pila de módulos responsables de la configuración de temporizador de plataforma más baja
        en este proceso.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Período solicitado</span></td>

          <td>10000</td>
        </tr>

        <tr>
          <td><span class="detail-name">Identificador de proceso solicitante</span></td>

          <td>16512</td>
        </tr>

        <tr>
          <td><span class="detail-name">Ruta de proceso solicitante</span></td>

          <td>
            \Device\HarddiskVolume3\Program Files (x86)\Google\Chrome\Application\chrome.exe
          </td>
        </tr>

        <tr>
          <td><span class="detail-name"> Pila de módulos de llamada </span></td>

          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>
        </tr>

        <tr>
          <td><span class="detail-name"></span></td>

          <td>\Device\HarddiskVolume3\Windows\System32\kernel32.dll</td>
        </tr>

        <tr>
          <td><span class="detail-name"></span></td>

          <td>
            \Device\HarddiskVolume3\Program Files
            (x86)\Google\Chrome\Application\103.0.5060.114\chrome.dll
          </td>
        </tr>

        <tr>
          <td><span class="detail-name"></span></td>

          <td>\Device\HarddiskVolume3\Windows\System32\kernel32.dll</td>
        </tr>

        <tr>
          <td><span class="detail-name"></span></td>

          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Resolución de temporizador de plataforma:Pila de solicitudes del temporizador
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Pila de módulos responsables de la configuración de temporizador de plataforma más baja
        en este proceso.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Período solicitado</span></td>

          <td>10000</td>
        </tr>

        <tr>
          <td><span class="detail-name">Identificador de proceso solicitante</span></td>

          <td>22680</td>
        </tr>

        <tr>
          <td><span class="detail-name">Ruta de proceso solicitante</span></td>

          <td>
            \Device\HarddiskVolume3\Program Files (x86)\Google\Chrome\Application\chrome.exe
          </td>
        </tr>

        <tr>
          <td><span class="detail-name"> Pila de módulos de llamada </span></td>

          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>
        </tr>

        <tr>
          <td><span class="detail-name"></span></td>

          <td>\Device\HarddiskVolume3\Windows\System32\kernel32.dll</td>
        </tr>

        <tr>
          <td><span class="detail-name"></span></td>

          <td>
            \Device\HarddiskVolume3\Program Files
            (x86)\Google\Chrome\Application\103.0.5060.114\chrome.dll
          </td>
        </tr>

        <tr>
          <td><span class="detail-name"></span></td>

          <td>\Device\HarddiskVolume3\Windows\System32\kernel32.dll</td>
        </tr>

        <tr>
          <td><span class="detail-name"></span></td>

          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Resolución de temporizador de plataforma:Pila de solicitudes del temporizador
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Pila de módulos responsables de la configuración de temporizador de plataforma más baja
        en este proceso.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Período solicitado</span></td>

          <td>10000</td>
        </tr>

        <tr>
          <td><span class="detail-name">Identificador de proceso solicitante</span></td>

          <td>22380</td>
        </tr>

        <tr>
          <td><span class="detail-name">Ruta de proceso solicitante</span></td>

          <td>
            \Device\HarddiskVolume3\Program Files\Docker\Docker\resources\com.docker.backend.exe
          </td>
        </tr>

        <tr>
          <td><span class="detail-name"> Pila de módulos de llamada </span></td>

          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>
        </tr>

        <tr>
          <td><span class="detail-name"></span></td>

          <td>\Device\HarddiskVolume3\Windows\System32\kernel32.dll</td>
        </tr>

        <tr>
          <td><span class="detail-name"></span></td>

          <td>
            \Device\HarddiskVolume3\Program Files\Docker\Docker\resources\com.docker.backend.exe
          </td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Resolución de temporizador de plataforma:Pila de solicitudes del temporizador
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Pila de módulos responsables de la configuración de temporizador de plataforma más baja
        en este proceso.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Período solicitado</span></td>

          <td>10000</td>
        </tr>

        <tr>
          <td><span class="detail-name">Identificador de proceso solicitante</span></td>

          <td>20716</td>
        </tr>

        <tr>
          <td><span class="detail-name">Ruta de proceso solicitante</span></td>

          <td>
            \Device\HarddiskVolume3\Program Files\Docker\Docker\resources\vpnkit-bridge.exe
          </td>
        </tr>

        <tr>
          <td><span class="detail-name"> Pila de módulos de llamada </span></td>

          <td>\Device\HarddiskVolume3\Windows\System32\ntdll.dll</td>
        </tr>

        <tr>
          <td><span class="detail-name"></span></td>

          <td>\Device\HarddiskVolume3\Windows\System32\kernel32.dll</td>
        </tr>

        <tr>
          <td><span class="detail-name"></span></td>

          <td>
            \Device\HarddiskVolume3\Program Files\Docker\Docker\resources\vpnkit-bridge.exe
          </td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">Directiva de energía:Plan de energía activo</div>

    <div class="log-entry-content">
      <div class="log-entry-description">El plan de energía actual que se está usando</div>

      <table>
        <tr>
          <td><span class="detail-name"> Nombre del plan </span></td>

          <td>Equilibrado OEM</td>
        </tr>

        <tr>
          <td><span class="detail-name">GUID de plan</span></td>

          <td>381b4222-f694-41f0-9685-ff5bb260df2e</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Directiva de energía:Plan preconfigurado de administración de energía (con batería)
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        El plan preconfigurado de administración de energía actual cuando el sistema usa la
        batería.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Plan preconfigurado</span></td>

          <td>Equilibrado</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">Directiva de energía:Calidad de vídeo (con batería)</div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Permite que el Reproductor de Windows Media optimice la calidad o el ahorro de energía
        al reproducir vídeo.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Modo de calidad</span></td>

          <td>Equilibrar calidad de vídeo y ahorro de energía</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Directiva de energía:Plan preconfigurado de administración de energía (con corriente
      alterna)
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        El plan preconfigurado de administración de energía actual cuando el sistema usa
        corriente alterna.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Plan preconfigurado</span></td>

          <td>Equilibrado</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Directiva de energía:La directiva de energía de radio 802.11 es Rendimiento máximo (con
      corriente alterna)
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        La directiva de energía actual para los adaptadores de red inalámbrica compatibles con
        802.11 no está configurada para usar modos de bajo consumo.
      </div>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Directiva de energía:Calidad de vídeo (con corriente alterna)
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Permite que el Reproductor de Windows Media optimice la calidad o el ahorro de energía
        al reproducir vídeo.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Modo de calidad</span></td>

          <td>Optimizar para calidad de vídeo</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">Suspensión de USB:Análisis correcto</div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Análisis correcto. No se encontraron problemas de eficiencia energética. No se devolvió
        ninguna información.
      </div>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">Batería:Información de batería</div>

    <div class="log-entry-content">
      <div class="log-entry-description"></div>

      <table>
        <tr>
          <td><span class="detail-name">Identificador de batería</span></td>

          <td>3013LGC-LGC3.685DELL XV8CJ0B</td>
        </tr>

        <tr>
          <td><span class="detail-name">Fabricante</span></td>

          <td>LGC-LGC3.685</td>
        </tr>

        <tr>
          <td><span class="detail-name">Número de serie</span></td>

          <td>3013</td>
        </tr>

        <tr>
          <td><span class="detail-name">Composición química</span></td>

          <td>LION</td>
        </tr>

        <tr>
          <td><span class="detail-name">Largo plazo</span></td>

          <td>1</td>
        </tr>

        <tr>
          <td><span class="detail-name">Sellado</span></td>

          <td>0</td>
        </tr>

        <tr>
          <td><span class="detail-name">Capacidad de diseño</span></td>

          <td>42009</td>
        </tr>

        <tr>
          <td><span class="detail-name">Última carga completa</span></td>

          <td>28728</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Capacidades de administración de energía de plataforma:Estados de suspensión compatibles
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Los estados de suspensión permiten al equipo entrar en modos de bajo consumo tras un
        período de inactividad. El estado de suspensión S3 es el predeterminado para las
        plataformas Windows. El estado de suspensión S3 solo consume la energía necesaria para
        conservar el contenido de la memoria y permitir que el equipo vuelva a funcionar con
        rapidez. Los estados de suspensión S1 o S2 se admiten en muy pocas plataformas.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Suspensión S1 compatible</span></td>

          <td>false</td>
        </tr>

        <tr>
          <td><span class="detail-name">Suspensión S2 compatible</span></td>

          <td>false</td>
        </tr>

        <tr>
          <td><span class="detail-name">Suspensión S3 compatible</span></td>

          <td>false</td>
        </tr>

        <tr>
          <td><span class="detail-name">Suspensión S4 compatible</span></td>

          <td>true</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Capacidades de administración de energía de plataforma:Compatibilidad con modo de espera
      conectado
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        El modo de espera conectado permite que el equipo entre en un modo de bajo consumo en el
        que siempre está activo y conectado. Si se admite el modo de espera conectado, se usará
        en lugar de los estados de suspensión del sistema.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Modo de espera conectado admitido</span></td>

          <td>true</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Capacidades de administración de energía de plataforma:Se admite el brillo de pantalla
      adaptable.
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        El equipo permite que Windows controle de forma automática el brillo de la pantalla
        integrada.
      </div>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Capacidades de administración de energía de plataforma:Capacidades de administración de
      energía de procesador
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Una administración de energía del procesador eficaz permite que el equipo equilibre
        automáticamente el rendimiento y el consumo de energía.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Grupo</span></td>

          <td>0</td>
        </tr>

        <tr>
          <td><span class="detail-name">Índice</span></td>

          <td>0</td>
        </tr>

        <tr>
          <td><span class="detail-name">Recuento de estados de inactividad</span></td>

          <td>11</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de estado de inactividad</span></td>

          <td>Complemento Micro Power Engine</td>
        </tr>

        <tr>
          <td><span class="detail-name">Frecuencia nominal (MHz)</span></td>

          <td>2208</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento máximo</span></td>

          <td>200</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento más bajo</span></td>

          <td>36</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de limitación más bajo</span></td>

          <td>4</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de controles de rendimiento</span></td>

          <td>Control de rendimiento de procesador de colaboración de ACPI</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Capacidades de administración de energía de plataforma:Capacidades de administración de
      energía de procesador
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Una administración de energía del procesador eficaz permite que el equipo equilibre
        automáticamente el rendimiento y el consumo de energía.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Grupo</span></td>

          <td>0</td>
        </tr>

        <tr>
          <td><span class="detail-name">Índice</span></td>

          <td>1</td>
        </tr>

        <tr>
          <td><span class="detail-name">Recuento de estados de inactividad</span></td>

          <td>11</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de estado de inactividad</span></td>

          <td>Complemento Micro Power Engine</td>
        </tr>

        <tr>
          <td><span class="detail-name">Frecuencia nominal (MHz)</span></td>

          <td>2208</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento máximo</span></td>

          <td>200</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento más bajo</span></td>

          <td>36</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de limitación más bajo</span></td>

          <td>4</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de controles de rendimiento</span></td>

          <td>Control de rendimiento de procesador de colaboración de ACPI</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Capacidades de administración de energía de plataforma:Capacidades de administración de
      energía de procesador
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Una administración de energía del procesador eficaz permite que el equipo equilibre
        automáticamente el rendimiento y el consumo de energía.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Grupo</span></td>

          <td>0</td>
        </tr>

        <tr>
          <td><span class="detail-name">Índice</span></td>

          <td>2</td>
        </tr>

        <tr>
          <td><span class="detail-name">Recuento de estados de inactividad</span></td>

          <td>11</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de estado de inactividad</span></td>

          <td>Complemento Micro Power Engine</td>
        </tr>

        <tr>
          <td><span class="detail-name">Frecuencia nominal (MHz)</span></td>

          <td>2208</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento máximo</span></td>

          <td>200</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento más bajo</span></td>

          <td>36</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de limitación más bajo</span></td>

          <td>4</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de controles de rendimiento</span></td>

          <td>Control de rendimiento de procesador de colaboración de ACPI</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Capacidades de administración de energía de plataforma:Capacidades de administración de
      energía de procesador
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Una administración de energía del procesador eficaz permite que el equipo equilibre
        automáticamente el rendimiento y el consumo de energía.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Grupo</span></td>

          <td>0</td>
        </tr>

        <tr>
          <td><span class="detail-name">Índice</span></td>

          <td>3</td>
        </tr>

        <tr>
          <td><span class="detail-name">Recuento de estados de inactividad</span></td>

          <td>11</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de estado de inactividad</span></td>

          <td>Complemento Micro Power Engine</td>
        </tr>

        <tr>
          <td><span class="detail-name">Frecuencia nominal (MHz)</span></td>

          <td>2208</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento máximo</span></td>

          <td>200</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento más bajo</span></td>

          <td>36</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de limitación más bajo</span></td>

          <td>4</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de controles de rendimiento</span></td>

          <td>Control de rendimiento de procesador de colaboración de ACPI</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Capacidades de administración de energía de plataforma:Capacidades de administración de
      energía de procesador
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Una administración de energía del procesador eficaz permite que el equipo equilibre
        automáticamente el rendimiento y el consumo de energía.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Grupo</span></td>

          <td>0</td>
        </tr>

        <tr>
          <td><span class="detail-name">Índice</span></td>

          <td>4</td>
        </tr>

        <tr>
          <td><span class="detail-name">Recuento de estados de inactividad</span></td>

          <td>11</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de estado de inactividad</span></td>

          <td>Complemento Micro Power Engine</td>
        </tr>

        <tr>
          <td><span class="detail-name">Frecuencia nominal (MHz)</span></td>

          <td>2208</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento máximo</span></td>

          <td>200</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento más bajo</span></td>

          <td>36</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de limitación más bajo</span></td>

          <td>4</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de controles de rendimiento</span></td>

          <td>Control de rendimiento de procesador de colaboración de ACPI</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Capacidades de administración de energía de plataforma:Capacidades de administración de
      energía de procesador
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Una administración de energía del procesador eficaz permite que el equipo equilibre
        automáticamente el rendimiento y el consumo de energía.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Grupo</span></td>

          <td>0</td>
        </tr>

        <tr>
          <td><span class="detail-name">Índice</span></td>

          <td>5</td>
        </tr>

        <tr>
          <td><span class="detail-name">Recuento de estados de inactividad</span></td>

          <td>11</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de estado de inactividad</span></td>

          <td>Complemento Micro Power Engine</td>
        </tr>

        <tr>
          <td><span class="detail-name">Frecuencia nominal (MHz)</span></td>

          <td>2208</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento máximo</span></td>

          <td>200</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento más bajo</span></td>

          <td>36</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de limitación más bajo</span></td>

          <td>4</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de controles de rendimiento</span></td>

          <td>Control de rendimiento de procesador de colaboración de ACPI</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Capacidades de administración de energía de plataforma:Capacidades de administración de
      energía de procesador
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Una administración de energía del procesador eficaz permite que el equipo equilibre
        automáticamente el rendimiento y el consumo de energía.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Grupo</span></td>

          <td>0</td>
        </tr>

        <tr>
          <td><span class="detail-name">Índice</span></td>

          <td>6</td>
        </tr>

        <tr>
          <td><span class="detail-name">Recuento de estados de inactividad</span></td>

          <td>11</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de estado de inactividad</span></td>

          <td>Complemento Micro Power Engine</td>
        </tr>

        <tr>
          <td><span class="detail-name">Frecuencia nominal (MHz)</span></td>

          <td>2208</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento máximo</span></td>

          <td>200</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento más bajo</span></td>

          <td>36</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de limitación más bajo</span></td>

          <td>4</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de controles de rendimiento</span></td>

          <td>Control de rendimiento de procesador de colaboración de ACPI</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">
      Capacidades de administración de energía de plataforma:Capacidades de administración de
      energía de procesador
    </div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Una administración de energía del procesador eficaz permite que el equipo equilibre
        automáticamente el rendimiento y el consumo de energía.
      </div>

      <table>
        <tr>
          <td><span class="detail-name">Grupo</span></td>

          <td>0</td>
        </tr>

        <tr>
          <td><span class="detail-name">Índice</span></td>

          <td>7</td>
        </tr>

        <tr>
          <td><span class="detail-name">Recuento de estados de inactividad</span></td>

          <td>11</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de estado de inactividad</span></td>

          <td>Complemento Micro Power Engine</td>
        </tr>

        <tr>
          <td><span class="detail-name">Frecuencia nominal (MHz)</span></td>

          <td>2208</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento máximo</span></td>

          <td>200</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de rendimiento más bajo</span></td>

          <td>36</td>
        </tr>

        <tr>
          <td><span class="detail-name">Porcentaje de limitación más bajo</span></td>

          <td>4</td>
        </tr>

        <tr>
          <td><span class="detail-name">Tipo de controles de rendimiento</span></td>

          <td>Control de rendimiento de procesador de colaboración de ACPI</td>
        </tr>
      </table>
      <span></span>
    </div>
  </div>
</div>

<div class="log-entry">
  <div class="info-log-entry">
    <div class="log-entry-header">Controladores de dispositivos:Análisis correcto</div>

    <div class="log-entry-content">
      <div class="log-entry-description">
        Análisis correcto. No se encontraron problemas de eficiencia energética. No se devolvió
        ninguna información.
      </div>
      <span></span>
    </div>
  </div>
</div>


  </div>;
};

export default Personal;
