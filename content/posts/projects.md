+++
+++

{{< figure src="../images/project_images/mqp.png">}}

## Autonomous Combat Robot

### August 2020 - May 2021

Inspired by the BattleBots competition, I joined a small team to create an autonomous 3lb combat
robot capable of competitively fighting a human controlled BattleBot. We built the system from
the ground up, setting our requirements and specifications, designing the hardware and software,
selecting the sensors, and integrating and testing. One of my primary contributions was to the
software controls system, which communicated with the vision system and onboard firmware via wifi
to send the robot movement commands. I also worked on the robot control GUI, which included an
E-STOP button as well as helpful features to aid the testing and debugging process. Throughout the
project, my teammates and I would meet regularly to integrate our subsystems and help each
other find solutions to problems we ran into along the way. In the end, our team accomplished all
our goals, and we successfully created a robot that could see its opponent and take appropriate
defensive countermeasures.

**Skills: git, python, openCV, C++, object oriented design, model based systems engineering**

<br>
<br>
<br>

{{< figure src="../images/project_images/3002_4.jpg">}}

## ROS SLAM Turtlebot

### October - December 2020

For this project, I worked on a 3-person team to develop Simultaneous Localization and Mapping
(SLAM) software on a turtlebot simulation using Robot Operating System (ROS) and Gazebo. This
project happened fully remotely, so my teammates and I experimented with different ways of
collaborating effectively until we found what worked best for our group. Each of us contributed
to every portion of the project, from drawing up algorithm designs on online whiteboards to
screensharing simulation runs as we tested our code. In the end, our robot could fully explore
and map its environment, making smart decisions about which frontier to head toward next.


**Skills: ROS, SLAM, python, algorithm design**

<br>
<br>
<br>

{{< figure src="../images/project_images/3001.jpg">}}

## Autonomous Computer Vision Robotic Manipulator

### January - February 2019

Over the course of 7 weeks, I worked with two other people to create a software control system for a
robotic manipulator that color-sorted small objects. Using forward and inverse kinematics, we
programmed the arm both to assume certain angular joint positions as well as to plan trajectories
to specified positions on our platform. With these steps completed, we then integrated computer
vision into our project to enable our robot arm to see objects, identify their color, dynamically
track and follow them as they moved across the platform, pick them up, and place them in a
designated location based on their color.

**Skills: forward and inverse kinematics, linear algebra, MATLAB, C++, computer vision**

<br>
<br>
<br>

{{< figure src="../images/project_images/hackathon.jpg">}}

## BostonHacks Coffee-Bot

### November 2018

During a 24-hour hackathon, my team decided we wanted to produce a robot rather than a pure-software
product. We knew that mornings are hard, and sometimes people just want to get out of bed to a cup
of coffee that's already waiting for us: that's why we created the Coffee-Bot, an integrated
alarm-and-coffee-maker system that has hot coffee waiting for you when your wakeup alarm goes off.
We got an off-the-shelf coffee maker and attached a servo motor to go off and push the "brew"
button when an alarm signal is received. My main contribution to the team was designing and
troubleshooting the firmware and circuitry. At one point, the servo wasn't responding to the PWM
signal we were sending, and probing the circuit revealed the voltage we were receiving was too low,
so I designed an op amp comparator circuit to amplify the signal. With everything integrated, the
Coffee-Bot worked as intended and our team earned an award for "Best Integration of a Qualcomm
DragonBoard 410c"!

**Skills: circuit design, electrical troubleshooting, firmware**

<br>
<br>
<br>

{{< figure src="../images/project_images/2001.jpg">}}

## Autonomous "Solar Panel" Distributing Robot

### August - October 2018

My team of three set out to design a robot with a lifter mechanism capable of picking and placing
"solar panels" on the roofs of model houses. Our design had to meet various specifications,
including size restrictions and ability to carry panels of different weights. As I was the most
software-happy person on the team, I developed software classes with the lower-level implementation
of methods so our code would be cleaner, and we could then contribute to the main state machine
with user-friendly lines of code such as Robot.moveForward(). By the end of the project, our robot
met all of our design requirements and satisfactorily completed each of its tasks.


**Skills: C++, SolidWorks, mechanical analysis, software-hardware integration**

<br>
<br>
<br>

{{< figure src="../images/project_images/fire.jpg">}}

## Autonomous Firefighting Robot

### March - May 2018

For this project, a small team and I developed a robot that automonously navigated a maze in search
of a flame. Upon localizing the flame, the robot used a fan mechanism to extinguish it. We started
out by creating the mechanical design, taking into consideration how much space we needed for the
onboard electronics. We selected sensors and motors based on our design requirements. Once we had
a rough whiteboard design, we used SolidWorks to CAD the parts and either lasercut or 3D-printed
each piece. After assembling the robot and wiring the electronics, we tested basic functionality
using simple software programs we wrote, such as moving forward, or turning, or following a wall.
Incrementally, we developed more complex software with a state machine and non-blocking code, using
filtered sensor data to feed decisionmaking. In the end, our robot successfully navigated the maze
and avoided falling off the edge of the table while simultaneously scanning for the fire until it
found it.

**Skills: C++, sensors, filtering, microcontrollers, hardware-software debugging, SolidWorks**

<br>
<br>
<br>