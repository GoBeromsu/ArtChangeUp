# ArtChangeUp 

- Project Name : Catoni
### 요구사항

- 5인 밴드
- 서울 내에서는 원할한 합주가 가능하도록
    - 서울 면적 605.23km^2
    - 즉 서울 중심부로부터 약 25km 내에서는 합주가 가능해야 한다.
- 음질은 16bit 44.1KHz (CD의 디지털 저장 표준)
- 웹 서비스
    - 사용자 연결
    - 실제 합주
### 기술 스펙

-   WAS : Fastify
    -   사용자의 요청을 처리 할 서버 프레임워크
-   Media server: Kurento
    -   Audio/video 데이터 전용 처리 서버
-   Signaling server: Coturn
    -   데이터를 사용자에게 보내기 전, 사용자의 위치를 파악하는데 사용됩니다
-   Programming language : TypeScript
-   Server: Hosted on AWS
-   Audio/video codecs - 웹 브라우저에 최적화 된 코덱을 사용해 지연을 낮춥니다
    -   Audio: Opus
    -   Video: VP8
-   Real-time communication을 위한 라이브러리:
    -   [Socket.io](http://socket.io/)
        -   서버와 클라이언트 간 실시간 데이터 처리를 주고 받기 위함
        -   클라이언트에서 서버로 명령을 보냅니다. (Ex. 강퇴, 악기 교체, 귓속말 등등)
    -   WebRTC
        -   네트워크에서 실시간 커뮤니케이션과 미디어 스트리밍을 위함
        -   실제로 Audio/Video를 주고 받을 때 사용합니다
-   네트워크 프로토콜 : UDP
    -   지연 시간을 줄이기 위해 사용합니다
    -   네트워크에서 트래픽의 우선 순위를 지정하고 지연 시간 및 패킷 손실을 최소화하도록 네트워크를 구성합니다
-   동기화 및 지연 시간 관리 :
    -   클럭 동기화 및 버퍼 관리를 위해 NTP를 사용합니다
    -   Jitter 버퍼를 사용하여 지연 시간의 변화를 완화하고 오디오와 비디오가 동기화되도록 합니다.
    -   각 컴퓨터의 지연 시간 및 Jitter를 추적하여, 오디오와 비디오가 동기화 상태를 유지하도록 주기적인 테스트를 합니다
 
## 요구사항 
- 사용자 관리
	- 사용자 로그인
	- 회원 가입
	- 회원 탈퇴
- 사용자 연주 관리
	- 뮤트/언뮤트
- 오디오/비디오 관리
	- 오디오/비디오 선택
	- 오디오/비디오 품질 선택
- 방 관리
	- 방 생성
	- 방 참가
	- 방 탈퇴
	- 방 삭제
- 동기화 관리 - 상태 관리 알고리즘
	- 프레임 기반 알고리즘
	- 적응형 버퍼 운영
	- 버퍼 우선 순위 지정 (오디오-비디오)
	- ~~미디어 세그먼트 버퍼 운영~~
- 지연 시간 관리
	- 버퍼 추가
	- 버퍼 제거
	- 버퍼 수정
